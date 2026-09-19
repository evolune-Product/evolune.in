'use client';

// CSS/SVG-only cinematic backgrounds. No external imagery — see README for
// which sections use these placeholders vs. real assets.

import { useEffect, useRef } from 'react';

/** Canvas starfield — lightweight, respects prefers-reduced-motion. */
export function Starfield({ density = 140, className = '' }: { density?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let stars: { x: number; y: number; r: number; s: number; phase: number }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      stars = Array.from({ length: density }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.2,
        s: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    let raf = 0;
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const twinkle = reduceMotion ? 0.7 : 0.5 + 0.5 * Math.sin(t * star.s + star.phase);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199, 212, 229, ${0.15 + twinkle * 0.55})`;
        ctx.fill();
      }
      t += 0.02;
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, [density]);

  return <canvas ref={ref} className={`absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />;
}

/** Radial nebula glows tuned to brand palette. */
export function NebulaGlow({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-1/4 left-1/4 h-[60vw] w-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-brand-blue/20 blur-[120px] animate-drift-slow" />
      <div className="absolute top-1/3 -right-1/4 h-[50vw] w-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-brand-violet/20 blur-[110px] animate-drift-slow" style={{ animationDelay: '-8s' }} />
      <div className="absolute bottom-0 left-1/3 h-[45vw] w-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-brand-cyan/10 blur-[100px] animate-drift-slow" style={{ animationDelay: '-16s' }} />
    </div>
  );
}

/** Thin orbital ring lines, SVG, slow rotation. */
export function OrbitalLines({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 800" className="h-[140%] w-[140%] max-w-none opacity-40 animate-orbit-spin-slow">
        <ellipse cx="400" cy="400" rx="380" ry="140" stroke="url(#orbit-grad-1)" strokeWidth="1" fill="none" />
      </svg>
      <svg viewBox="0 0 800 800" className="absolute h-[110%] w-[110%] max-w-none opacity-30 animate-orbit-spin-slower">
        <ellipse cx="400" cy="400" rx="300" ry="300" stroke="url(#orbit-grad-2)" strokeWidth="1" fill="none" transform="rotate(35 400 400)" />
      </svg>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="orbit-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#60D8FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7C4DFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbit-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C4DFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#2563FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#60D8FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** Subtle grid overlay for panels/sections. */
export function GridOverlay({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-[0.07] ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(to right, #C7D4E5 1px, transparent 1px), linear-gradient(to bottom, #C7D4E5 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
      }}
    />
  );
}

/** Cinematic hero "planet" — CSS/SVG only placeholder for commissioned photography. */
export function HeroPlanet() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="relative h-[70vw] w-[70vw] max-w-[820px] max-h-[820px] animate-drift-slow">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, rgba(96,216,255,0.35), rgba(37,99,255,0.18) 45%, rgba(8,12,20,0) 70%)',
            filter: 'blur(2px)',
          }}
        />
        <div
          className="absolute inset-[18%] rounded-full"
          style={{
            background: 'radial-gradient(circle at 32% 28%, #1a2b52, #0b1020 65%)',
            boxShadow: 'inset -40px -40px 90px rgba(0,0,0,0.6), 0 0 140px rgba(37,99,255,0.25)',
          }}
        />
        <div
          className="absolute inset-0 rounded-full border border-brand-cyan/25"
          style={{ transform: 'rotate(-18deg) scaleY(0.32)' }}
        />
        <div
          className="absolute inset-[-6%] rounded-full border border-brand-violet/15"
          style={{ transform: 'rotate(-18deg) scaleY(0.32)' }}
        />
      </div>
    </div>
  );
}
