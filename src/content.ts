export type Lang = 'ja' | 'en';

type SiteContent = {
  htmlLang: string;
  pageTitle: string;
  // ヘッダーのロゴ（logo.png = CUBICENGINEstudio のロゴ）のリンク先。
  // 掲げているのが開発元のロゴなので、自サイトのトップではなく会社HPへ返す。
  // ここが '/' だと押しても自分に戻るだけで、3サイトが繋がらない
  studioHref: string;
  otherLangLabel: string;
  otherLangHref: string;
  currentLangLabel: string;
  hero: {
    productName: string;
    // ロゴのすぐ下に大きく出す一行。読ませる説明ではなく、誘い文句として置く
    tagline: string;
    line1: string;
    line2: string;
    lead: string[];
    buyLabel: string;
    // 購入ボタンのリンク先。販売所が言語で違う（ja は BOOTH、en は Ko-fi）ので
    // App にURLを直書きせず、文言と同じくここで言語ごとに持つ
    buyHref: string;
    // 動作環境。買ってから動かないと分かっても返金できないので、
    // 購入ボタンの真下に置いて、押す前に必ず目に入るようにする。
    // ⚠️ スマホから見ている人が一番危ない（この製品はWindows専用）
    requirement: string;
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
    pageTitle: 'CUBICENGINEstudio — CMCUBE',
    studioHref: 'https://cubicenginestudio.vercel.app/',
    otherLangLabel: 'EN',
    otherLangHref: '/en/',
    currentLangLabel: 'JP',
    hero: {
      productName: 'CMCUBE',
      tagline: 'あなたも一発撮りに挑戦してみない？',
      line1: 'あとから編集無し！！！',
      line2: '録画のみの圧倒的ライブ感',
      lead: [
        '起動して2クリック、もう録れる。シーンもソースも組まない。',
        'ゲームを遊んでいる手を止めずに、テロップもVFXも叩き込める。',
        '止めた瞬間、MP4 が出る。変換も編集もいらない。',
        '「完璧なライブ動画CM」を、このスタジオが実現する。',
      ],
      buyLabel: '購入する（¥500）',
      buyHref: 'https://cubicengine.booth.pm/items/8688761',
      requirement: 'Windows 10 / 11 専用のアプリです。スマートフォン・Mac ではご利用いただけません。',
    },
    features: {
      accent: 'CORE',
      rest: ' FEATURES',
      items: [
        {
          title: '🎨 17種のプレミアム配信テーマ',
          body: '高品質な背景アートと、それを引き立てる「静かな環境アニメーション」をセットにした17種のテーマを収録。1クリックで配信画面をプレミアムな空間に変えます。',
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
          body: 'ゲームやアプリは別ウィンドウのまま取り込めます。CMCUBEにフォーカスが無くてもショートカットキーでテロップ・効果音・VFXが発動するので、プレイする手を止めずに演出を重ねられます。実況の撮影が、ひとりで完結します。',
        },
        {
          title: '🎬 出力はMP4。そのまま投稿',
          body: 'H.264 + AAC のMP4で書き出します。YouTube、TikTok、Instagram、各種編集ソフトにそのまま渡せます。変換作業は要りません。',
        },
        {
          title: '😳 配信の練習用にも',
          body: 'ゲームのライブ配信やってみたいけど。。。ちょっと恥ずかしい人の練習用に',
        },
        {
          title: '🎓 子供の安全な配信体験に',
          // 実際には配信せず録画するだけなので「しているような」を必ず残す。
          // 英語版の "simulated" と対になっている
          body: '子供たちも遊びながら、ライブ配信しているような体験が安全にできる。PCの使い方（ショートカット機能覚えるなど）にも慣れ親御さんも嬉しい',
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
          body: 'カメラ映像、マイク音声、画面録画データはすべてユーザー様のPC内（ローカル）でのみ処理され、CUBICENGINEstudioのサーバーその他の外部サーバーに送信・保存されることは一切ありません。録画したファイルはお使いのPCの「ビデオ」フォルダ内にのみ保存されます。機密情報を含む配信でも安心してご利用いただけます。なお、本ソフトウェアは画面表示用のWebフォントの取得と、起動時の更新確認（新しいバージョンの有無を製品サイトに問い合わせます）のために通信を行います。いずれも録画内容や利用状況を送信するものではありません。',
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
        { label: '運営責任者', value: '伊波 香菜子' },
        { label: 'メールアドレス', value: 'syunpoo419@gmail.com' },

        // 2026-08-06 は「伏せずに全部出す」で決めていたが、2026-08-07 に請求開示へ切り替えた。
        // 所在地は個人の住所で、一度出すと検索に残る。他サイト側の配慮と揃わなくなるため出さない。
        //
        // 特商法は、通信販売の個人事業者が「請求があれば遅滞なく開示する」旨と開示方法を
        // 明記していれば、広告上での住所・電話番号の記載を省略できる運用になっている。
        // 条件は (1) 請求に遅滞なく応じられること (2) メール等の連絡先は必ず出すこと
        // (3) 開示請求の方法を併記すること。下の文面はその3つを満たす形にしてある。
        // ⚠️ この3つを崩す変更（メールアドレスを消す、開示方法を書かない等）を入れると
        //    省略の根拠が無くなり、記載義務違反になる。実際の住所・電話番号は
        //    ここには置かず、請求が来たら本人がメールで返す運用。
        {
          label: '所在地',
          value: '請求があった場合は、遅滞なく開示いたします。上記のメールアドレス宛にご請求ください。',
        },
        {
          label: '電話番号',
          value: '請求があった場合は、遅滞なく開示いたします。上記のメールアドレス宛にご請求ください。',
        },

        { label: '販売価格', value: '¥500（税込）' },
        { label: '商品代金以外の必要料金', value: 'インターネット接続に必要な通信料等はお客様のご負担となります。' },
        { label: '支払方法', value: 'BOOTH を通じたクレジットカード決済、コンビニ決済、その他 BOOTH が提供する決済方法' },
        { label: '支払時期', value: 'ご注文時にお支払いが確定します。' },
        { label: '引渡時期', value: '決済完了後、ただちにダウンロードいただけます。' },
        { label: '返品・キャンセル', value: 'デジタル商品の性質上、購入後の返品・返金はお受けできません。動作しない等の不具合がある場合は上記メールアドレスまでご連絡ください。' },
        { label: '動作環境', value: 'Windows 10 / 11（64bit）。Windows 11 の「スマート アプリ コントロール」が有効な環境では、署名のないアプリとして起動が拒否されます（警告は表示されません）。該当する場合は Microsoft ストア版の公開をお待ちください。' },
      ],
    },
    footer: '© 2026 CUBICENGINEstudio. All rights reserved.',
  },

  en: {
    htmlLang: 'en',
    pageTitle: 'CUBICENGINEstudio — CMCUBE',
    // 会社HPの英語版は /en（末尾スラッシュ無しのルート）
    studioHref: 'https://cubicenginestudio.vercel.app/en',
    otherLangLabel: 'JP',
    otherLangHref: '/',
    currentLangLabel: 'EN',
    hero: {
      productName: 'CMCUBE',
      tagline: 'Why not take on the one-take challenge?',
      line1: 'NO POST-EDITING!!!',
      line2: 'Just record. Pure live energy.',
      lead: [
        'Two clicks from launch and you are rolling. No scenes, no sources to wire up.',
        'Fire captions and VFX without taking your hands off the game.',
        'Stop recording and an MP4 is waiting. No conversion, no editing.',
        'This studio makes the perfect live video ad a reality.',
      ],
      buyLabel: 'Buy Now ($5)',
      // 英語版は Ko-fi で売る。BOOTH は決済も表示も日本語圏向けなので海外には向けない。
      // 商品ページの直リンク。ショップタブ（/ihafam/shop）でもトップ（/ihafam）でもない。
      // ⚠️ トップに向けてはいけない — あそこは製品 CUBICENGINE 向けの寄付画面で、
      //    同じ Ko-fi アカウントに寄付と販売が同居している
      buyHref: 'https://ko-fi.com/s/0d6f4f5342',
      requirement: 'Windows 10 / 11 only. This app does not run on smartphones or Mac.',
    },
    features: {
      accent: 'CORE',
      rest: ' FEATURES',
      items: [
        {
          title: '🎨 17 Premium Themes',
          body: 'Pre-loaded with 17 stunning themes featuring high-quality background art paired with subtle, ambient animations. Switch the entire look of your stream with a single click.',
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
          body: 'Capture your game or app from its own window. Keyboard shortcuts fire captions, sounds and VFX even when CMCUBE is not the focused window — so you never take your hands off the game. One person, one take.',
        },
        {
          title: '🎬 MP4 Out, Ready to Post',
          body: 'Recordings are written as H.264 + AAC MP4. Hand them straight to YouTube, TikTok, Instagram or your editor of choice. No conversion step.',
        },
        {
          title: '😳 Perfect for Practice',
          body: 'Want to try live streaming your gameplay but feeling a bit shy? This is the perfect tool to practice and build your confidence!',
        },
        {
          title: '🎓 Safe Streaming for Kids',
          body: 'Kids can enjoy a safe, simulated live streaming experience while playing. It’s a fun way to learn PC basics like keyboard shortcuts, giving parents peace of mind!',
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
          body: 'Camera footage, microphone audio and screen recordings are processed only on your own PC, and are never transmitted to or stored on CUBICENGINEstudio servers or any other external server, so you can use it safely even for confidential streams. Recordings are written only to the Videos folder on your own machine. The app does reach the network for two things: fetching web fonts for display, and checking our product site at startup for a newer version. Neither sends your recordings or any usage data.',
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
