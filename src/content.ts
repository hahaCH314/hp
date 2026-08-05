export type Lang = 'ja' | 'en';

type SiteContent = {
  htmlLang: string;
  pageTitle: string;
  homeHref: string;
  otherLangLabel: string;
  otherLangHref: string;
  currentLangLabel: string;
  hero: {
    productName: string;
    line1: string;
    line2: string;
    lead: string[];
    buyLabel: string;
  };
  features: {
    accent: string;
    rest: string;
    items: { title: string; body: string }[];
  };
  legal: {
    accent: string;
    rest: string;
    boxes: { title: string; body: string }[];
  };
  footer: string;
};

export const content: Record<Lang, SiteContent> = {
  ja: {
    htmlLang: 'ja',
    pageTitle: 'CUBICENGINE Studio — CMCUBE',
    homeHref: '/',
    otherLangLabel: 'EN',
    otherLangHref: '/en/',
    currentLangLabel: 'JP',
    hero: {
      productName: 'CMCUBE',
      line1: 'あとから編集無し！！！',
      line2: '録画のみの圧倒的ライブ感',
      lead: [
        '編集に慣れているプロすら驚く、画期的な動画ライブ編集。',
        '究極まで研ぎ澄まされたUI、16種のプレミアムフレーム、',
        '直感的なサウンド＆テロップ制御。',
        '「完璧なライブ動画CM」を、このスタジオが実現する。',
      ],
      buyLabel: 'CMCUBE (¥500)',
    },
    features: {
      accent: 'CORE',
      rest: ' FEATURES',
      items: [
        {
          title: '🎨 16種の多様なフレーム',
          body: 'モダン、サイバー、レトロCRT、グラスモーフィズム。各4つのバリエーションを備えた超高品質なフレーム群を1クリックで切り替え。',
        },
        {
          title: '🎹 拡張サウンドボード',
          body: 'BGMから5つの効果音まで、あなたの好きな音源をロード可能。キーボードのショートカットで、ライブ中に即座に音を出せます。',
        },
        {
          title: '🔠 ド派手なテロップ演出',
          body: 'ゴールド、ネオン、ホラーなど5種のテキストスタイルと、飛び出し・スライドなどのアニメーションを瞬時に発動。',
        },
      ],
    },
    legal: {
      accent: 'LICENSE',
      rest: ' & SECURITY',
      boxes: [
        {
          title: '1. 出力動画は【完全ロイヤリティフリー】',
          body: '本ソフトウェア（CMCUBE）を使用してユーザー様が作成した動画・画像については、完全にユーザー様の権利となります。YouTube等での収益化、商用利用を含め、追加費用なし（ロイヤリティフリー）で自由に公開・利用していただけます。',
        },
        {
          title: '2. 完全ローカル処理（プライバシーの保護）',
          body: 'カメラ映像、マイク音声、画面録画データはすべてユーザー様のPC内（ローカル）でのみ処理されます。CUBICENGINEstudioの外部サーバー等に映像や音声データが送信・保存されることは一切ありませんので、機密情報を含む配信でも安心してご利用いただけます。',
        },
        {
          title: '3. ソフトウェアの著作権（EULA）',
          body: 'CMCUBEのプログラム、UI、デザイン、コードの著作権は CUBICENGINEstudio に帰属します。購入者によるソフトウェア本体の無断転載・再配布・リバースエンジニアリングは固く禁じます。本ソフトウェアの使用によって生じたいかなる損害についても、開発者は責任を負いかねます。',
        },
      ],
    },
    footer: '© 2026 CUBICENGINEstudio. All rights reserved.',
  },

  en: {
    htmlLang: 'en',
    pageTitle: 'CUBICENGINE Studio — CMCUBE',
    homeHref: '/en/',
    otherLangLabel: 'JP',
    otherLangHref: '/',
    currentLangLabel: 'EN',
    hero: {
      productName: 'CMCUBE',
      line1: 'NO POST-EDITING!!!',
      line2: 'Just record. Pure live energy.',
      lead: [
        'Live video production that even seasoned editors find groundbreaking.',
        'A razor-sharp UI, 16 premium frames,',
        'and intuitive sound & caption control.',
        'This studio makes the perfect live video ad a reality.',
      ],
      buyLabel: 'CMCUBE (¥500)',
    },
    features: {
      accent: 'CORE',
      rest: ' FEATURES',
      items: [
        {
          title: '🎨 16 Premium Frames',
          body: 'Modern, Cyber, Retro CRT and Glassmorphism, with four variations each. Switch between 16 high-quality frames with a single click.',
        },
        {
          title: '🎹 Expandable Soundboard',
          body: 'Load your own background music and up to five sound effects. Fire them instantly mid-stream with keyboard shortcuts.',
        },
        {
          title: '🔠 Bold Caption Effects',
          body: 'Five text styles including Gold, Neon and Horror, with pop-in, slide and other animations triggered on the spot.',
        },
      ],
    },
    legal: {
      accent: 'LICENSE',
      rest: ' & SECURITY',
      boxes: [
        {
          title: '1. Your output is fully royalty-free',
          body: 'Videos and images you create with CMCUBE are entirely yours. Monetize them on YouTube, use them commercially — freely, and with no additional fees.',
        },
        {
          title: '2. Fully local processing (privacy protected)',
          body: 'Camera footage, microphone audio and screen recordings are processed only on your own PC. Nothing is ever transmitted to or stored on CUBICENGINEstudio servers, so you can use it safely even for confidential streams.',
        },
        {
          title: '3. Software copyright (EULA)',
          body: 'The program, UI, design and code of CMCUBE belong to CUBICENGINEstudio. Reuploading, redistributing or reverse engineering the software is strictly prohibited. The developer accepts no liability for any damages arising from its use.',
        },
      ],
    },
    footer: '© 2026 CUBICENGINEstudio. All rights reserved.',
  },
};
