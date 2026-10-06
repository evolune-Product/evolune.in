import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Full-bleed WebGL backdrop for the hero: a rotating icosahedral wireframe
 * core surrounded by a drifting particle field, with subtle mouse parallax.
 * Pure three.js, no postprocessing deps — kept cheap enough for mobile.
 */
const HeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // ---- Core: layered icosahedron wireframes ----
    const coreGroup = new THREE.Group();
    const coreColors = [0x3b6bff, 0x8a7c6f, 0x5b82ff];
    coreColors.forEach((color, i) => {
      const geo = new THREE.IcosahedronGeometry(2.1 + i * 0.55, 1);
      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.22 - i * 0.05,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      coreGroup.add(mesh);
    });
    scene.add(coreGroup);

    // ---- Particle field ----
    const PARTICLE_COUNT = window.innerWidth < 768 ? 700 : 1600;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const palette = [
      new THREE.Color(0x1d4ed8),
      new THREE.Color(0x8a8178),
      new THREE.Color(0x0a0a0a),
      new THREE.Color(0x3b6bff),
    ];
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 5 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.6;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---- Mouse parallax ----
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };
    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', handlePointerMove);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        coreGroup.rotation.y = elapsed * 0.06;
        coreGroup.rotation.x = elapsed * 0.03;
        particles.rotation.y = -elapsed * 0.015;
        particles.rotation.x = elapsed * 0.008;
      }

      targetRotation.x += (mouse.y * 0.25 - targetRotation.x) * 0.03;
      targetRotation.y += (mouse.x * 0.35 - targetRotation.y) * 0.03;
      scene.rotation.x = targetRotation.x;
      scene.rotation.y = targetRotation.y;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      particleGeo.dispose();
      particleMat.dispose();
      coreGroup.children.forEach((m) => {
        const mesh = m as THREE.Mesh;
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="hero-canvas" aria-hidden="true" />;
};

export default HeroCanvas;
