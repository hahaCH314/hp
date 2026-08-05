import React from 'react';

function App() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img src="/logo.png" alt="CUBICENGINE Studio" className="official-logo" />
        </div>
      </header>

      <main>
        <section className="hero">
          <h1 style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '4px' }}>
            <span className="glitch-text">編集なし</span><br/>
            <span className="yellow">録画のみの圧倒的ライブ感</span>
          </h1>
          <p>
            編集に慣れているプロすら驚く、画期的な動画ライブ編集。<br/>
            究極まで研ぎ澄まされたUI、16種のプレミアムフレーム、<br/>
            直感的なサウンド＆テロップ制御。<br/>
            「完璧なライブ動画CM」を、このスタジオが実現する。
          </p>
          <a href="#buy" className="buy-btn">
            CMCUBE PRO (¥300)
          </a>
        </section>

        <section className="features">
          <h2 className="section-title">
            <span className="glitch-text-yellow">CORE</span> FEATURES
          </h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🎨 16種の多様なフレーム</h3>
              <p>モダン、サイバー、レトロCRT、グラスモーフィズム。各4つのバリエーションを備えた超高品質なフレーム群を1クリックで切り替え。</p>
            </div>
            <div className="feature-card">
              <h3>🎹 拡張サウンドボード</h3>
              <p>BGMから5つの効果音まで、あなたの好きな音源をロード可能。キーボードのショートカットで、ライブ中に即座に音を出せます。</p>
            </div>
            <div className="feature-card">
              <h3>🔠 ド派手なテロップ演出</h3>
              <p>ゴールド、ネオン、ホラーなど5種のテキストスタイルと、飛び出し・スライドなどのアニメーションを瞬時に発動。</p>
            </div>
          </div>
        </section>

        <section className="legal" id="buy">
          <div className="legal-content">
            <h2 className="section-title">
              <span className="glitch-text-yellow">LICENSE</span> & SECURITY
            </h2>
            
            <div className="legal-box">
              <h3>1. 出力動画は【完全ロイヤリティフリー】</h3>
              <p>
                本ソフトウェア（CMCUBE PRO）を使用してユーザー様が作成した動画・画像については、完全にユーザー様の権利となります。
                YouTube等での収益化、商用利用を含め、追加費用なし（ロイヤリティフリー）で自由に公開・利用していただけます。
              </p>
            </div>

            <div className="legal-box">
              <h3>2. 完全ローカル処理（プライバシーの保護）</h3>
              <p>
                カメラ映像、マイク音声、画面録画データはすべてユーザー様のPC内（ローカル）でのみ処理されます。
                CUBICENGINEstudioの外部サーバー等に映像や音声データが送信・保存されることは一切ありませんので、機密情報を含む配信でも安心してご利用いただけます。
              </p>
            </div>

            <div className="legal-box">
              <h3>3. ソフトウェアの著作権（EULA）</h3>
              <p>
                CMCUBE PROのプログラム、UI、デザイン、コードの著作権は CUBICENGINEstudio に帰属します。
                購入者によるソフトウェア本体の無断転載・再配布・リバースエンジニアリングは固く禁じます。
                本ソフトウェアの使用によって生じたいかなる損害についても、開発者は責任を負いかねます。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        &copy; 2026 CUBICENGINEstudio. All rights reserved.
      </footer>
    </>
  );
}

export default App;
