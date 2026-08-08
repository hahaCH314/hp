import React from 'react';
import { content, type Lang } from './content';

// 特定商取引法に基づく表記の単独ページ（/tokushoho/）。
//
// トップに直書きしていたのを 2026-08-08 に切り出した。運営責任者の実名と
// メールアドレスは特商法上どちらも省略できず（省略できるのは住所と電話番号だけ）、
// トップに置くと製品を見に来ただけの人の目にも必ず入る。記載義務は「購入者が
// 容易に辿れる場所にあること」で満たせるので、フッターからのリンクに変えてある。
//
// ⚠️ ja 専用。日本の消費者向けの制度なので en からは辿らせない。
//    `content.ts` の `tokushoho` も optional のまま。
function Tokushoho({ lang }: { lang: Lang }) {
  const t = content[lang];

  // en には tokushoho が無い。直接 /tokushoho/ を開かれた場合の保険
  if (!t.tokushoho) return null;

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
        <section className="legal tokushoho">
          <div className="legal-content">
            <h2 className="section-title">
              <span className="glitch-text-pink">{t.tokushoho.accent}</span>{t.tokushoho.rest}
            </h2>

            <dl className="tokushoho-list">
              {t.tokushoho.rows.map((row) => (
                <React.Fragment key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </React.Fragment>
              ))}
            </dl>

            <p className="tokushoho-back">
              <a href="/">← {t.hero.productName}</a>
            </p>
          </div>
        </section>
      </main>

      <footer>{t.footer}</footer>
    </>
  );
}

export default Tokushoho;
