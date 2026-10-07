import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import CompanyProfile from './components/CompanyProfile';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateViewer from './components/CertificateViewer';

function App() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const openCertificate = () => setIsCertificateOpen(true);
  const closeCertificate = () => setIsCertificateOpen(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal-up'));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const spotlightEls = Array.from(
      document.querySelectorAll<HTMLElement>('.bento-card, .blog-card, .glass-card')
    );
    const handleMove = (e: MouseEvent, el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
    };
    const listeners: Array<() => void> = [];
    spotlightEls.forEach((el) => {
      const fn = (e: MouseEvent) => handleMove(e, el);
      el.addEventListener('mousemove', fn);
      listeners.push(() => el.removeEventListener('mousemove', fn));
    });
    return () => listeners.forEach((off) => off());
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenCertificate={openCertificate} />
      <main style={{ flex: 1 }}>
        <Hero onOpenCertificate={openCertificate} />

        <div className="nvidia-strip">
          <a
            href="https://www.nvidia.com/en-us/startups/"
            target="_blank"
            rel="noopener noreferrer"
            className="nvidia-badge-link"
            title="Evolune EdgeTech, an NVIDIA Inception program member"
          >
            <img
              src="/nvidia-inception-badge.svg"
              alt="NVIDIA Inception Program Member"
              className="nvidia-badge-img"
            />
          </a>
        </div>

        <Products />
        <Features />
        <CompanyProfile onOpenCertificate={openCertificate} />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer onOpenCertificate={openCertificate} />

      <CertificateViewer
        isOpen={isCertificateOpen}
        onClose={closeCertificate}
      />
    </div>
  );
}

export default App;
