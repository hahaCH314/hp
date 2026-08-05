import React from 'react';
import { content, type Lang } from './content';

function App({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <header>
        <div className="logo-container">
          <a href={t.homeHref} className="logo-link" aria-label="CUBICENGINE Studio">
            <img src="/logo.png" alt="CUBICENGINE Studio" className="official-logo" />
          </a>
        </div>
        <div className="lang-switch">
          <span className="lang-current">{t.currentLangLabel}</span>
          <span className="lang-separator">/</span>
          <a href={t.otherLangHref} className="lang-link">{t.otherLangLabel}</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="product-name">{t.hero.productName}</p>
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

      </main>

      <footer>
        {t.footer}
      </footer>
    </>
  );
}

export default App;
