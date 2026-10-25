import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const projects = [
  { number: '01', type: 'TELEGRAM / AUTOMATION', title: 'Bots that do the work.', desc: 'Telegram bots, useful flows and small tools that make repetitive tasks easier.' },
  { number: '02', type: 'WEB / EXPERIMENTS', title: 'Interfaces with attitude.', desc: 'Personal web experiences built around clear ideas, motion and visual character.' },
  { number: '03', type: 'TOOLS / IN PROGRESS', title: 'Ideas become systems.', desc: 'An evolving collection of experiments and projects. More soon.' },
];

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let observer;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('visible'));
    } else {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
      nodes.forEach(node => observer.observe(node));
    }

    // Pointer parallax is desktop-only: avoid continuous work on touch devices.
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let frame = 0;
    const move = (event) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        document.documentElement.style.setProperty('--mx', ((event.clientX / window.innerWidth) - .5).toFixed(2));
        document.documentElement.style.setProperty('--my', ((event.clientY / window.innerHeight) - .5).toFixed(2));
      });
    };
    if (finePointer && !reduceMotion) window.addEventListener('pointermove', move, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return <main>
    <header className="topbar">
      <a className="brand" href="#top">R<span>✳</span>UM<span className="brand-dot">.</span></a>
      <nav><a href="#about">ABOUT</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT ↗</a></nav>
      <span className="availability"><i /> AVAILABLE FOR IDEAS</span>
    </header>

    <section className="hero" id="top">
      <div className="hero-meta"><span>INDEPENDENT CREATOR / DIGITAL BUILDER</span><span>EUROPE · ONLINE</span></div>
      <div className="hero-copy">
        <div className="profile-avatar-wrap">
          <img className="profile-avatar" src="/avatar.jpg" alt="Roum avatar" onError={(event) => {
            const img = event.currentTarget;
            if (img.dataset.fallback !== 'true') {
              img.dataset.fallback = 'true';
              img.src = '/avatar.png';
            } else {
              img.style.display = 'none';
            }
          }} />
          <span className="profile-avatar-caption">YOUR AVATAR / 01</span>
        </div>
        <p className="eyebrow"><span className="lime">✳</span> PERSONAL SPACE — 2026</p>
        <h1>IDEAS INTO<br/><span className="outline">REAL</span> THINGS<span className="lime">.</span></h1>
        <div className="hero-bottom"><p>Building bots, websites<br/>and digital experiments.</p><a className="round-link" href="#projects" aria-label="Explore projects">↘</a></div>
      </div>
      <div className="orb-wrap" aria-hidden="true"><div className="orb"><div className="orb-shine" /><div className="orb-core" /></div><span className="orb-label">NOT JUST ANOTHER<br/>LINK IN BIO ↗</span></div>
      <div className="hero-index"><span>SCROLL TO EXPLORE</span><span>↓</span><span>001 — 004</span></div>
    </section>

    <div className="ticker"><div className="ticker-track">{Array.from({length:6},(_,i)=><span key={i}>MAKE IT REAL <b>✳</b> BUILD WITH PURPOSE <b>✳</b> BREAK THE TEMPLATE <b>✳</b></span>)}</div></div>

    <section className="about section-pad" id="about">
      <div className="section-label reveal"><span>01 / ABOUT</span><span>A LITTLE CONTEXT</span></div>
      <div className="about-grid">
        <h2 className="reveal">Not here to<br/>blend <em>in.</em></h2>
        <div className="about-text reveal"><p className="big-copy">I’m ROUM — a developer exploring the space between useful tools and expressive digital design.</p><p>I build Telegram bots, websites and custom automation. This is my corner of the internet: a place for projects, experiments and things that are still taking shape.</p><div className="tag-list"><span>JAVASCRIPT</span><span>TELEGRAM BOTS</span><span>WEB DESIGN</span><span>AUTOMATION</span></div></div>
      </div>
      <div className="about-stamp">CURIOUS<br/>BY DEFAULT<span>✳</span></div>
    </section>

    <section className="projects section-pad" id="projects">
      <div className="section-label reveal"><span>02 / SELECTED DIRECTIONS</span><span>WORK IN PROGRESS ↘</span></div>
      <div className="projects-heading reveal"><h2>Built to<br/><em>do more.</em></h2><p>No made-up case studies.<br/>Just real work, experiments<br/>and the next thing in progress.</p></div>
      <div className="project-list">{projects.map(p=><article className="project-card reveal" key={p.number}><span className="project-number">{p.number}</span><div className="project-main"><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.desc}</p></div><span className="project-arrow">↗</span></article>)}</div>
    </section>

    <section className="manifesto"><div className="manifesto-symbol">✳</div><p className="reveal">LESS TEMPLATE.<br/><span>MORE</span> <em>PERSONALITY.</em></p><span className="manifesto-note">DESIGNED TO EVOLVE — NOT TO SIT STILL.</span></section>

    <section className="contact section-pad" id="contact">
      <div className="section-label reveal"><span>03 / CONTACT</span><span>HAVE A GOOD ONE?</span></div>
      <div className="contact-body reveal"><p className="eyebrow"><span className="lime">✳</span> YOUR IDEA CAN START HERE</p><h2>Let’s make<br/>something <em>real.</em></h2><a className="contact-link" href="https://t.me/roum1Q" target="_blank" rel="noreferrer"><span>MESSAGE ROUM ON TELEGRAM</span><span>↗</span></a></div>
      <div className="contact-orbit" aria-hidden="true">R<span>✳</span></div>
    </section>

    <footer><a className="brand" href="#top">R<span>✳</span>UM<span className="brand-dot">.</span></a><span>MADE OF IDEAS & LATE NIGHTS</span><span>© ROUM 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
