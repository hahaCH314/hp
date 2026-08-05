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
  // 特定商取引法に基づく表記。日本の消費者向けの制度なので ja のみ持つ
  tokushoho?: {
    accent: string;
    rest: string;
    rows: { label: string; value: string }[];
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
        '起動して2クリック、もう録れる。シーンもソースも組まない。',
        'ゲームを遊んでいる手を止めずに、テロップもVFXも叩き込める。',
        '止めた瞬間、MP4 が出る。変換も編集もいらない。',
        '「完璧なライブ動画CM」を、このスタジオが実現する。',
      ],
      buyLabel: 'CMCUBE (¥400)',
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
        {
          title: '🎮 遊びながら、演出する',
          body: 'ゲームやアプリは別ウィンドウのまま取り込めます。CMCUBEにフォーカスが無くても Ctrl+Alt+キー でテロップ・効果音・VFXが発動するので、プレイする手を止めずに演出を重ねられます。実況の撮影が、ひとりで完結します。',
        },
        {
          title: '🎬 出力はMP4。そのまま投稿',
          body: 'H.264 + AAC のMP4で書き出します。YouTube、TikTok、Instagram、各種編集ソフトにそのまま渡せます。変換作業は要りません。',
        },
      ],
    },
    legal: {
      accent: 'LICENSE',
      rest: ' & SECURITY',
      boxes: [
        {
          title: '1. 出力動画は【完全ロイヤリティフリー】',
          body: '本ソフトウェア（CMCUBE）を使用してユーザー様が作成した動画・画像については、完全にユーザー様の権利となります。YouTube等での収益化、商用利用を含め、追加費用なし（ロイヤリティフリー）で自由に公開・利用していただけます。なお、ユーザー様が読み込ませた音源・画像・Webページ等に第三者の権利がある場合、その権利処理はユーザー様の責任となります。',
        },
        {
          title: '2. 録画データは外部に送信しません',
          body: 'カメラ映像、マイク音声、画面録画データはすべてユーザー様のPC内（ローカル）でのみ処理され、CUBICENGINEstudioのサーバーその他の外部サーバーに送信・保存されることは一切ありません。機密情報を含む配信でも安心してご利用いただけます。なお、画面表示用のWebフォントの取得と、ユーザー様が中央ステージに指定したURLへの接続は通常どおり発生します（いずれも録画データの送信ではありません）。',
        },
        {
          title: '3. ソフトウェアの著作権（EULA）',
          body: 'CMCUBEのプログラム、UI、デザイン、コードの著作権は CUBICENGINEstudio に帰属します。購入者によるソフトウェア本体の無断転載・再配布・リバースエンジニアリングは固く禁じます。本ソフトウェアの使用によって生じたいかなる損害についても、開発者は責任を負いかねます。使用許諾契約の全文はインストール時に表示されます。',
        },
        {
          title: '4. 利用上の注意（購入前にお読みください）',
          body: '本ソフトウェアは画面をそのまま録画します。取り込んだウィンドウに映ったチャット、メール、通知、氏名などはすべて動画に残り、一度公開された動画は取り消せません。第三者の個人情報が映る画面を録画しないでください。ゲーム映像・動画・音楽・画像など第三者に権利のある素材については、利用の可否を各権利者の規約に従ってご判断ください。人物を撮影・録音する場合は本人の同意を得てください。他者を貶める目的、または誤解を与える目的でのご利用は固くお断りします。',
        },
      ],
    },
    tokushoho: {
      accent: '特定商取引法',
      rest: 'に基づく表記',
      rows: [
        { label: '販売業者', value: 'CUBICENGINEstudio' },
        { label: '運営責任者', value: '【要記入】' },
        { label: '所在地', value: '【要記入】' },
        { label: '電話番号', value: '【要記入】' },
        { label: 'メールアドレス', value: '【要記入】' },
        { label: '販売価格', value: '¥400（税込）' },
        { label: '商品代金以外の必要料金', value: 'インターネット接続に必要な通信料等はお客様のご負担となります。' },
        { label: '支払方法', value: 'Ko-fi を通じたクレジットカード決済、または PayPal' },
        { label: '支払時期', value: 'ご注文時にお支払いが確定します。' },
        { label: '引渡時期', value: '決済完了後、ただちにダウンロードいただけます。' },
        { label: '返品・キャンセル', value: 'デジタル商品の性質上、購入後の返品・返金はお受けできません。動作しない等の不具合がある場合は上記メールアドレスまでご連絡ください。' },
        { label: '動作環境', value: 'Windows 10 / 11（64bit）' },
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
        'Two clicks from launch and you are rolling. No scenes, no sources to wire up.',
        'Fire captions and VFX without taking your hands off the game.',
        'Stop recording and an MP4 is waiting. No conversion, no editing.',
        'This studio makes the perfect live video ad a reality.',
      ],
      buyLabel: 'CMCUBE (¥400)',
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
        {
          title: '🎮 Play and Produce at Once',
          body: 'Capture your game or app from its own window. Ctrl+Alt shortcuts fire captions, sounds and VFX even when CMCUBE is not the focused window — so you never take your hands off the game. One person, one take.',
        },
        {
          title: '🎬 MP4 Out, Ready to Post',
          body: 'Recordings are written as H.264 + AAC MP4. Hand them straight to YouTube, TikTok, Instagram or your editor of choice. No conversion step.',
        },
      ],
    },
    legal: {
      accent: 'LICENSE',
      rest: ' & SECURITY',
      boxes: [
        {
          title: '1. Your output is fully royalty-free',
          body: 'Videos and images you create with CMCUBE are entirely yours. Monetize them on YouTube, use them commercially — freely, and with no additional fees. Where a third party holds rights in material you load into the app (audio, images, web pages), clearing those rights is your responsibility.',
        },
        {
          title: '2. Your recordings are never sent anywhere',
          body: 'Camera footage, microphone audio and screen recordings are processed only on your own PC, and are never transmitted to or stored on CUBICENGINEstudio servers or any other external server, so you can use it safely even for confidential streams. The app does fetch web fonts for display, and connects to whatever URL you point the central stage at — neither involves sending your recordings.',
        },
        {
          title: '3. Software copyright (EULA)',
          body: 'The program, UI, design and code of CMCUBE belong to CUBICENGINEstudio. Reuploading, redistributing or reverse engineering the software is strictly prohibited. The developer accepts no liability for any damages arising from its use. The full license agreement is shown during installation.',
        },
        {
          title: '4. Responsible use (please read before buying)',
          body: 'CMCUBE records your screen as it is. Anything visible in a captured window — chats, email, notifications, names — ends up in the video, and a video once published cannot be taken back. Do not record screens containing other people’s personal information. For game footage, video, music, images and other material owned by third parties, follow each rights holder’s terms when deciding whether you may use it. Get consent from anyone you film or record. Using CMCUBE to demean people or to mislead is strictly prohibited.',
        },
      ],
    },
    footer: '© 2026 CUBICENGINEstudio. All rights reserved.',
  },
};
