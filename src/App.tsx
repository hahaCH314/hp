import React, { useState, useEffect } from 'react';
import { content, type Lang } from './content';

function App({ lang }: { lang: Lang }) {
  const t = content[lang];
  const [mangaTexts, setMangaTexts] = useState<{id: number, text: string, style: React.CSSProperties}[]>([]);
  const [boyAnim, setBoyAnim] = useState({ id: 0, animClass: 'run-dash' });

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

  // 多動な男の子のアニメーション切り替え
  useEffect(() => {
    // 5つの動き（普通のダッシュ、こける、落ちる、空から降る、覗き込む）
    const boyAnims = ['run-dash', 'run-trip', 'run-fall', 'run-drop', 'run-peek'];
    
    // 5秒ごとに次のランダムな動きを抽選して再描画する
    const boyInterval = setInterval(() => {
      setBoyAnim({
        id: Date.now(),
        animClass: boyAnims[Math.floor(Math.random() * boyAnims.length)]
      });
    }, 5500); 

    return () => clearInterval(boyInterval);
  }, []);

  return (
    <>
      <div className="hp-manga-layer">
        {mangaTexts.map(m => (
          <div key={m.id} className="hp-manga-item" style={m.style}>{m.text}</div>
        ))}
      </div>

      {/* 走る男の子（多動！） */}
      <div className="running-boy-container">
        {/* key を変えることで、毎回新しく要素が作られてアニメーションが最初から再生される */}
        <div key={boyAnim.id} className={`running-boy ${boyAnim.animClass}`}>
          {/* 伊波さんの作成した画像を public/ フォルダに入れ、ここを以下のように img タグに変更してください */}
          {/* <img src="/running-boy.gif" alt="走る男の子" style={{ height: '80px' }} /> */}
          🏃‍♂️💨
        </div>
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
          {/* ⚠️ **押すとそのままファイルが落ちる**（2026-08-23、伊波さん
              「直接ダウンロードが１番いいと思う」）。前は BOOTH / Ko-fi へ
              飛ばしていた。
              target="_blank" を外したのは、ダウンロードが始まるだけなのに
              空のタブが残ると「何も起きなかった」ように見えるため。
              download 属性を付けて、ブラウザに「これは保存するもの」と伝える */}
          <a href={t.hero.buyHref} className="buy-btn" download>
            {t.hero.buyLabel}
          </a>
          {/* 動作環境はボタンの真下に置く。買ってから動かないと分かっても
              返金できないので、押す前に必ず目に入る位置でなければ意味がない */}
          <p className="hero-requirement">{t.hero.requirement}</p>
          {/* Windows 専用なので、スマホで来た人はここで行き止まりになる。
              無料のスマホ版へ渡す（2026-08-10） */}
          <p className="hero-phone">
            {t.hero.phoneNote}{' '}
            <a href={t.hero.phoneHref} target="_blank" rel="noopener noreferrer">{t.hero.phoneLabel} →</a>
          </p>

          <div style={{ marginTop: '24px' }}>
            <a href="https://discord.gg/wVnyfnv7d" className="discord-hp-btn" target="_blank" rel="noopener noreferrer">
              👾 公式Discordコミュニティに参加する！
            </a>
          </div>
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
        {/* SNSはURLも表示名も言語で変わらないので content.ts には置かない。
            共有リンクに付く ?igsh= や ?_t= は追跡用パラメータなので外してある */}
        <div className="footer-social">
          <a href="https://discord.gg/wVnyfnv7d" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#5865F2', fontWeight: 'bold' }}>
            Discord
          </a>
          <span className="footer-social-sep">/</span>
          <a href="https://www.instagram.com/cubicenginestudio/" target="_blank" rel="noopener noreferrer" className="footer-link">
            Instagram
          </a>
          <span className="footer-social-sep">/</span>
          <a href="https://www.tiktok.com/@cubicenginestudio" target="_blank" rel="noopener noreferrer" className="footer-link">
            TikTok
          </a>
          <span className="footer-social-sep">/</span>
          <a href="https://x.com/CUBICENGINE" target="_blank" rel="noopener noreferrer" className="footer-link">
            X
          </a>
          <span className="footer-social-sep">/</span>
          <a href="https://www.youtube.com/channel/UCLFDpyaWesF8TiuYBD5B49w" target="_blank" rel="noopener noreferrer" className="footer-link">
            YouTube
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
