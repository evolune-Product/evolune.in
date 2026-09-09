import React from 'react';

const About: React.FC = () => {
  const principles = [
    {
      num: '01 / AGENCY',
      title: 'Autonomous Agency',
      desc: 'We do not build thin wrappers or toy prompts. We architect production-grade multi-agent loops that plan, write, verify, and ship real code under deterministic constraints.',
    },
    {
      num: '02 / RIGOR',
      title: 'Mathematical Rigor',
      desc: 'From sub-millisecond API chaos injection in Flasqo to deterministic AST verification in Evolune OS, our algorithms are built on foundational computation.',
    },
    {
      num: '03 / DENSITY',
      title: 'Radical Simplicity',
      desc: 'Flasqo replaces 13 fragmented testing tools with one unified interface. We ruthlessly eliminate dependency bloat and cognitive friction for engineering teams.',
    },
    {
      num: '04 / VELOCITY',
      title: 'Relentless Execution',
      desc: 'Founded in February 2025, recognised by DPIIT, and winner of IIT Madras I-Summit with a PitchArena finals run in our first year. We measure success strictly by software that actually ships.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-up">
          <span className="section-label">Our Philosophy</span>
          <h2 className="section-title">
            Built for Engineers Who <span className="text-gradient">Demand More.</span>
          </h2>
          <p className="section-subtitle">
            At Evolune EdgeTech, we reject modern software bloat. We build high-leverage autonomous platforms that multiply engineering output by orders of magnitude.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="philosophy-grid">
          {principles.map((item, index) => (
            <div key={index} className="philosophy-card">
              <span className="philosophy-num">{item.num}</span>
              <h3 className="philosophy-title">{item.title}</h3>
              <p className="philosophy-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
