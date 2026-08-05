import React from 'react';
import { content, type Lang } from './content';

function App({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <header>
        <div className="logo-container">
          <img src="/logo.png" alt="CUBICENGINE Studio" className="official-logo" />
        </div>
        <div className="lang-switch">
          <span className="lang-current">{t.currentLangLabel}</span>
          <span className="lang-separator">/</span>
          <a href={t.otherLangHref} className="lang-link">{t.otherLangLabel}</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1 style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '4px' }}>
            <span className="glitch-text">{t.hero.line1}</span><br/>
            <span className="yellow">{t.hero.line2}</span>
          </h1>
          <p>
            {t.hero.lead.map((line, i) => (
              <React.Fragment key={i}>
                {line}<br/>
              </React.Fragment>
            ))}
          </p>
          <a href="#buy" className="buy-btn">
            {t.hero.buyLabel}
          </a>
        </section>

        <section className="features">
          <h2 className="section-title">
            <span className="glitch-text-yellow">{t.features.accent}</span>{t.features.rest}
          </h2>
          <div className="feature-grid">
            {t.features.items.map((item) => (
              <div className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="legal" id="buy">
          <div className="legal-content">
            <h2 className="section-title">
              <span className="glitch-text-yellow">{t.legal.accent}</span>{t.legal.rest}
            </h2>

            {t.legal.boxes.map((box) => (
              <div className="legal-box" key={box.title}>
                <h3>{box.title}</h3>
                <p>{box.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content">
            <h2 className="section-title">
              <span className="glitch-text-yellow">{t.about.accent}</span>{t.about.rest}
            </h2>
            <p className="about-tagline">{t.about.tagline}</p>
            <h3>{t.about.heading}</h3>
            <p className="about-body">{t.about.body}</p>
          </div>
        </section>

        <section className="projects" id="projects">
          <h2 className="section-title">
            <span className="glitch-text-yellow">{t.projects.accent}</span>{t.projects.rest}
          </h2>
          <div className="project-grid">
            {t.projects.items.map((project) => (
              <div className="project-card" key={project.name}>
                <h3>{project.icon} {project.name}</h3>
                <p>{project.body}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.linkLabel} ↗
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        {t.footer}
      </footer>
    </>
  );
}

export default App;
