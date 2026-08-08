import React, { useState, useEffect } from 'react';
import { content, type Lang } from './content';

function App({ lang }: { lang: Lang }) {
  const t = content[lang];
  const [mangaTexts, setMangaTexts] = useState<{id: number, text: string, style: React.CSSProperties}[]>([]);

  useEffect(() => {
    const words = ['（えーーーーー）', '（うっそー）', '（wwwwww）', '（がーーーーーーーん）', '（まじ？）', '（草）', '（ドカーーーーーン）', '（ざわ…ざわ…）', '（ヤターーー）', '（キターーー）'];
    const anims = ['hp-manga-left', 'hp-manga-right', 'hp-manga-down', 'hp-manga-up', 'hp-manga-diag1', 'hp-manga-diag2'];
    const colors = ['var(--primary-pink)', '#00ffff', 'var(--text-main)', 'var(--text-muted)'];
    
    const interval = setInterval(() => {
      const text = words[Math.floor(Math.random() * words.length)];
      const animName = anims[Math.floor(Math.random() * anims.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const fontSize = Math.floor(Math.random() * 80) + 40 + 'px';
      
      const id = Date.now() + Math.random();
      const duration = Math.random() * 5 + 8; // 8 to 13 seconds

      const newManga = {
        id,
        text,
        style: {
          color,
          fontSize,
          animation: `${animName} ${duration}s linear forwards`,
          top: Math.random() * 90 + '%',
          left: Math.random() * 90 + '%',
        }
      };
      setMangaTexts(prev => [...prev, newManga]);

      // Remove the element immediately after its animation finishes
      setTimeout(() => {
        setMangaTexts(prev => prev.filter(m => m.id !== id));
      }, duration * 1000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="hp-manga-layer">
        {mangaTexts.map(m => (
          <div key={m.id} className="hp-manga-item" style={m.style}>{m.text}</div>
        ))}
      </div>
      <header>
        <div className="logo-container">
          <a href={t.studioHref} className="logo-link" aria-label="CUBICENGINEstudio">
            <img src="/logo.png" alt="CUBICENGINEstudio" className="official-logo" />
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
          {/* .hero p の詳細度が単一クラスより高いので、必ず .hero を前に付けて書く */}
          <p className="hero-tagline">{t.hero.tagline}</p>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '4px' }}>
            <span className="glitch-text">{t.hero.line1}</span><br/>
            <span className="pink">{t.hero.line2}</span>
          </h1>
          <p>
            {t.hero.lead.map((line, i) => (
              <React.Fragment key={i}>
                {line}<br/>
              </React.Fragment>
            ))}
          </p>
          {/* 日本語版はBOOTH、英語版はKo-fiで販売する */}
          <a href={t.hero.buyHref} className="buy-btn" target="_blank" rel="noopener noreferrer">
            {t.hero.buyLabel}
          </a>
        </section>

        <section className="features">
          <h2 className="section-title">
            <span className="glitch-text-pink">{t.features.accent}</span>{t.features.rest}
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
              <span className="glitch-text-pink">{t.legal.accent}</span>{t.legal.rest}
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

      {/* 特商法の中身は /tokushoho/ に切り出してある（実名とメールアドレスが載るので
          製品を見に来ただけの人の目に必ず入る場所には置かない）。記載義務は
          「購入者が容易に辿れること」で足りるので、フッターからのリンクで満たす。
          ⚠️ このリンクを消すと辿れなくなり記載義務違反になる */}
      <footer>
        {t.footer}
        {t.tokushoho && (
          <>
            {' '}
            <a href="/tokushoho/" className="footer-link">
              {t.tokushoho.accent}{t.tokushoho.rest}
            </a>
          </>
        )}
      </footer>
    </>
  );
}

export default App;
