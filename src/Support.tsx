import React from 'react';
import { content, type Lang } from './content';

// サポートの単独ページ（/support/、英語は /en/support/）。
//
// ⚠️ **App Store Connect のサポートURL はここを指すこと。**
//    製品紹介のトップを登録すると「質問や支援を求められる情報が無い」として
//    審査で弾かれる（2026-09-28、Guideline 1.5 で実際に指摘された）。
//    連絡先と、返信の目安と、よくある質問をこのページから外さないこと。
function Support({ lang }: { lang: Lang }) {
  const t = content[lang];
  const s = t.support;

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
        <section className="legal support">
          <div className="legal-content">
            <h2 className="section-title">
              <span className="glitch-text-pink">{s.accent}</span>{s.rest}
            </h2>
            <p className="support-lead">{s.lead}</p>

            <h3 className="support-heading">{s.contactTitle}</h3>
            <p className="support-body">{s.contactBody}</p>
            {/* 押せるようにしておく。住所や電話と違い、連絡先は隠す理由がない */}
            <p className="support-email">
              <a href={`mailto:${s.email}`}>{s.email}</a>
            </p>

            <h3 className="support-heading">{s.faqTitle}</h3>
            <dl className="tokushoho-list">
              {s.faq.map((row) => (
                <React.Fragment key={row.q}>
                  <dt>{row.q}</dt>
                  <dd>{row.a}</dd>
                </React.Fragment>
              ))}
            </dl>

            <p className="tokushoho-back">
              <a href={lang === 'en' ? '/en/' : '/'}>
                {s.backLabel.replace('{product}', t.hero.productName)}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer>{t.footer}</footer>
    </>
  );
}

export default Support;
