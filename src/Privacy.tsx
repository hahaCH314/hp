import React from 'react';
import { content, type Lang } from './content';

// プライバシーポリシーの単独ページ（/privacy/、英語は /en/privacy/）。
//
// App Store / Mac App Store は掲載URLの登録を必須にしていて、404 だと審査に
// 通らない。特商法ページと違い日本固有の制度ではないので ja / en 両方を持つ。
//
// ⚠️ 本文は「アプリが実際に何をしているか」と一致していなければ意味がない。
//    カメラ・マイクの扱い、録画の保存先、更新確認の通信の3点は main.cjs の
//    実装が根拠になっている。アプリ側を変えたらここも一緒に直すこと。
function Privacy({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <header>
        <div className="logo-container">
          <a href={t.studioHref} className="logo-link" aria-label="CUBICENGINEstudio">
            <img src="/logo.png" alt="CUBICENGINEstudio" className="official-logo" />
          </a>
        </div>
      </header>

      <main>
        <section className="legal privacy">
          <div className="legal-content">
            <h2 className="section-title">
              <span className="glitch-text-pink">{t.privacy.accent}</span>{t.privacy.rest}
            </h2>

            <p className="privacy-updated">{t.privacy.updated}</p>

            <dl className="tokushoho-list">
              {t.privacy.sections.map((row) => (
                <React.Fragment key={row.title}>
                  <dt>{row.title}</dt>
                  <dd>{row.body}</dd>
                </React.Fragment>
              ))}
            </dl>

            {/* 法定の表示だけ出して放り出さない（特商法ページと同じ扱い） */}
            <p className="tokushoho-back">
              <a href={lang === 'en' ? '/en/' : '/'}>
                {t.privacy.backLabel.replace('{product}', t.hero.productName)}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer>{t.footer}</footer>
    </>
  );
}

export default Privacy;
