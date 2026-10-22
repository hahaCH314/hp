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
    /** アプリ内課金（追加フレームなど）の案内表示 */
    inAppPurchaseNote: string;
    /**
     * ダウンロードボタンのリンク先。
     *
     * ⚠️ **押したらそのままファイルが落ちる直リンクにすること**（2026-08-23、
     *    伊波さん「BOOTHって馴染みがなさすぎて。。。」「直接ダウンロードが
     *    １番いいと思う」）。
     *
     *    前は BOOTH（日本語）と Ko-fi（英語）へ飛ばしていた。有料で売って
     *    いたころの名残で、無料にしたあとも売り場を経由させていた。
     *    ゲーム配信をしたい人にとって BOOTH は馴染みが薄く、知らないサイトへ
     *    飛ばされると、そこで止まってしまう。
     *
     * ⚠️ **URL にバージョンを入れないこと。** `latest` と固定のファイル名
     *    （CMCUBE-Setup.exe）で受けているので、新しい版を出しても
     *    ここを直さなくてよい。**上げるときにファイル名をそろえること。**
     */
    buyHref: string;
    /** 押したあとに出す知らせ。**押しても画面が変わらないので、
        始まったことが分からず何度も押してしまう**（2026-08-23） */
    startedNote: string;
    /** 落とした exe の開き方（2026-08-27）。署名がないので
        「WindowsによってPCが保護されました」に全員が当たる */
    openTitle: string;
    openSteps: string[];
    /** Mac 版。2026-09-02 に追加。公証済みなので「開きかた」は要らない */
    buyLabelMac: string;
    buyHrefMac: string;
    startedNoteMac: string;
    openNote: string;
    // 動作環境。買ってから動かないと分かっても返金できないので、
    // 購入ボタンの真下に置いて、押す前に必ず目に入るようにする。
    // ⚠️ スマホから見ている人が一番危ない（この製品はパソコン専用。
    //    2026-09-02 に Mac でも動くようになった。スマホ非対応は変わらない）
    requirement: string;
    /** スマホの人の行き先。CMCUBE はパソコン専用なので、ここで取りこぼさない
        （2026-08-10、「製品どうしは直リンクしない」約束を見直した） */
    phoneNote: string;
    /** 行き先が無いときは省ける。ストア審査中など、リンクを出すと
        押した人が行き止まりになる期間に使う。 */
    phoneLabel?: string;
    phoneHref?: string;
    /** Google Play 側。2026-10-14 公開（パッケージ名 com.cubicenginestudio.tinycube.app）。
        片方だけ出すと「もう一方のストアは無い」ように見えるので、出すときは2本とも出す */
    phoneLabel2?: string;
    phoneHref2?: string;
    /** Mac App Store 版（2026-10-22 に 1.3.3 が審査通過、id6811258789）。
        dmg の直ダウンロードは残し、ストアは「こちらからも」の案内にとどめる。
        ストア版の追加フレームは Apple の App 内課金、直ダウンロード版は PayPal で別々 */
    macStoreNote: string;
    macStoreLabel: string;
    macStoreHref: string;
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
  // プライバシーポリシー。App Store / Mac App Store が掲載を必須にしている。
  // 特商法と違って日本固有の制度ではないので ja / en 両方が持つ（optional にしない）
  privacy: {
    accent: string;
    rest: string;
    updated: string;
    sections: { title: string; body: string }[];
    backLabel: string;
  };
  // サポートページ。App Store は「利用者が質問・支援を求められるページ」への
  // URL 登録を必須にしていて、製品紹介だけのトップを出すと審査で弾かれる
  // （2026-09-28、Guideline 1.5 で実際に指摘された）
  support: {
    accent: string;
    rest: string;
    lead: string;
    contactTitle: string;
    contactBody: string;
    email: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    backLabel: string;
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
      // ⚠️ この一行は製品への約束であって、キャッチコピーではない。
      // 2026-08-09 時点では、字幕を他所で付けた利用者がいて、まだ守れていなかった。
      // 弱めるのではなく、守れる製品にする方針を選んだ（伊波さんの判断）。
      // 1.3.0（2026-10-18）で、文字を録画前に入れておけば自動で出て、時間が来たら自動で
      // 止まる作りにした。これでようやく約束の中身が実装に追いついた。
      // 1.3.4（2026-10-22）で、時間で勝手に止めるのはやめた。利用者が「止めて保存」を押すまで録る。
      // 文字の中身を録画中に差し替えることはできない（そこは「録画前に決める」）。
      line1: 'あとから編集無し！！！',
      line2: '録画のみの圧倒的ライブ感',
      lead: [
        '画面を選んで、文字を入れて、スタート。むずかしい設定はありません。',
        '文字は自動で出る。録画中に押すのは、終わるときの「止めて保存」だけ。',
        '手持ちの動画にも、フレームと文字をそのまま重ねられる。',
        '止めた瞬間、MP4 が出る。変換も編集もいらない。',
      ],
      // 2026-09-12 お試し無料3種＋追加フレーム¥300のアプリ内課金モデルを導入
      buyLabel: '無料でダウンロード',
      inAppPurchaseNote: '※無料ダウンロード（一部アプリ内課金あり：追加フレーム ¥300）',
      buyHref: 'https://github.com/hahaCH314/cmcube-download/releases/latest/download/CMCUBE-Setup.exe',
      startedNote: 'ダウンロードしています。そのままお待ちください（325MB）。',
      buyLabelMac: 'Mac 版をダウンロード',
      buyHrefMac: 'https://github.com/hahaCH314/cmcube-download/releases/latest/download/CMCUBE-mac.dmg',
      startedNoteMac: 'ダウンロードしています。そのままお待ちください（446MB）。開いたら CMCUBE をアプリケーションフォルダへドラッグしてください。',
      openTitle: '青い画面が出たときの開きかた',
      openSteps: [
        'ダウンロードしたファイルをダブルクリックします',
        '「Windows によって PC が保護されました」と出たら、青い文字の「詳細情報」を押します',
        '下に出てくる「実行」を押します',
      ],
      openNote: 'このお知らせは、アプリに開発元の証明書を付けていないために出るものです。中身に問題があるという意味ではありません。証明書は年間の費用がかかるため、まだ付けていません。',
      requirement: 'Windows 10 / 11 と macOS（Intel・Apple Silicon）のアプリです。スマートフォンではご利用いただけません。',
      // tinyCUBE は App Store・Google Play 両方で公開済み（2026-10-14、Google Play は
      // パッケージ名 com.cubicenginestudio.tinycube.app で上げ直した版）。
      // CMCUBE はパソコン専用なので、スマホで来た人をここで渡す。
      // ⚠️ URLに国コード（/jp/）を入れないこと。海外の人が開くと
      //    「国が違う」という警告が出て、そこで止まってしまう
      phoneNote: 'スマホの方へ。撮ってある動画に声とエフェクトを一発撮りで乗せるスマホ用アプリ tinyCUBE が App Store・Google Play 両方で公開されました！',
      phoneLabel: 'App Store で見る',
      phoneHref: 'https://apps.apple.com/app/id6803792204',
      phoneLabel2: 'Google Play で見る',
      phoneHref2: 'https://play.google.com/store/apps/details?id=com.cubicenginestudio.tinycube.app',
      macStoreNote: 'Mac は App Store からも入れられます。',
      macStoreLabel: 'Mac App Store で見る',
      macStoreHref: 'https://apps.apple.com/app/id6811258789',
    },
    features: {
      accent: 'CORE',
      rest: ' FEATURES',
      items: [
        {
          title: '🖼 フレームは横54種・縦29種',
          body: '横長（16:9）と、TikTok・YouTubeショート・リール向けの縦長（9:16）のフレームを収録。絵を選ぶだけで、画面が一気にCMらしくなります。縦の29種全部と横の38種は、絵に合わせて動く演出つき。無料で使えるのは4種（推し色はピンクをお試しで）、残りは追加フレーム（¥300）で全部使えます。',
        },
        {
          title: '🔠 文字は自動で出る',
          body: 'ゴールドの派手な文字を最大3つ。「はじめ・なか・おわり」に入れておくと、録画の始まり・途中・止めるときに自動でポンと飛び出します。「うおおおお！！」「神ゲー」など、押すだけで入るひと言も用意しました。',
        },
        {
          title: '🎮 遊んで、止めるだけ',
          body: 'ゲームやアプリは別ウィンドウのまま取り込めます。録画を始めたら、ゲームの画面をクリックして遊ぶだけ。文字が自動で入り、「止めて保存」を押すまで長さの上限なく録れます。実況の撮影が、ひとりで完結します。',
        },
        {
          title: '🎥 手持ちの動画もそのまま',
          body: 'スマホやゲーム機で撮った動画ファイルも読み込めます。動画が頭から流れ、フレームと文字を重ねて書き出します。長さの上限はありません。',
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
          body: '子供たちも遊びながら、ライブ配信しているような体験が安全にできる。操作は3つだけなので、パソコンに慣れていなくても大丈夫。親御さんも安心',
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
          body: 'CMCUBEのプログラム、UI、デザイン、コードの著作権は CUBICENGINEstudio に帰属します。利用者によるソフトウェア本体の無断転載・再配布・リバースエンジニアリングは固く禁じます。本ソフトウェアの使用によって生じたいかなる損害についても、開発者は責任を負いかねます。使用許諾契約の全文はインストール時に表示されます。',
        },
        {
          title: '4. 利用上の注意（ダウンロード前にお読みください）',
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
        { label: 'メールアドレス', value: 'cubicenginestudio@icloud.com' },

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

        // ⚠️ **無料でも特商法の記載は残すこと。** 事業者の連絡先や引渡時期は
        //    有償・無償にかかわらず求められる。
        // 2026-09-12 アプリ内課金（追加フレームアンロック ¥300）導入に伴い更新。
        // 法定の表示なので実態とずれてはいけない
        { label: '販売価格', value: '本体無料（一部アプリ内課金あり：追加フレーム ¥300）' },
        { label: '商品代金以外の必要料金', value: 'インターネット接続に必要な通信料等はお客様のご負担となります。' },
        { label: '支払方法', value: '本体：無料 / 追加フレーム：PayPal決済（各種クレジットカード、デビットカード等対応）' },
        { label: '支払時期', value: '追加フレームご購入時（PayPal決済完了時）に即時' },
        { label: '引渡時期', value: '本体：ダウンロードボタン押下後ただちにダウンロードが始まります。 / 追加フレーム：決済完了後、アプリ内で即時に全フレームがアンロックされます。' },
        { label: '返品・キャンセル', value: 'デジタルコンテンツの性質上、購入完了後の返品・返金・キャンセルはお受けできません。無料のお試しフレーム等で動作をご確認の上ご購入ください。不具合等の場合は上記メールアドレスまでご連絡ください。' },
        { label: '動作環境', value: 'Windows 10 / 11（64bit）および macOS（Intel / Apple Silicon）。Windows 11 の「スマート アプリ コントロール」が有効な環境では、署名のないアプリとして起動が拒否されます（警告は表示されません）。該当する場合は Microsoft ストア版の公開をお待ちください。' },
      ],
    },
    privacy: {
      accent: 'プライバシー',
      rest: 'ポリシー',
      updated: '最終更新日: 2026年10月18日',
      sections: [
        {
          title: '収集する情報',
          body: 'CMCUBE はアカウント登録を必要とせず、氏名・メールアドレス・生年月日などの個人情報を収集しません。',
        },
        {
          title: 'カメラとマイク',
          body: 'CMCUBE は、現在の画面ではカメラもマイクも使いません。カメラやマイクを使う機能を提供する場合も、映像と音声はお使いのパソコンの中だけで処理され、外部のサーバーへ送信されることはありません。',
        },
        {
          title: '録画したデータ',
          body: '録画した動画はお使いのパソコンの中に保存されます（macOS は ~/Movies/CMCUBE、Windows はビデオフォルダ）。CUBICENGINEstudio がその内容を取得したり閲覧したりすることはありません。',
        },
        {
          title: '通信',
          body: '新しい版が公開されていないかを確かめるため、起動時に当サイトの version.json を読み込みます。この通信で送信する個人情報はありません。ただし一般的なウェブサーバーと同じく、接続元の IP アドレスなどがアクセスログに記録される場合があります。',
        },
        {
          title: 'アクセス解析と広告',
          body: 'アクセス解析ツール、広告、行動追跡の仕組みはいずれも組み込んでいません。',
        },
        {
          title: '第三者への提供',
          body: '上記のとおり個人情報を収集していないため、第三者へ提供する情報はありません。',
        },
        {
          title: 'お問い合わせ',
          body: '本ポリシーに関するお問い合わせは cubicenginestudio@icloud.com までご連絡ください。',
        },
        {
          title: '改定',
          body: '本ポリシーを変更した場合は、このページに掲載します。',
        },
      ],
      backLabel: '← {product} のページに戻る',
    },
    support: {
      accent: 'サポート',
      rest: '',
      lead: 'CMCUBE の使い方や不具合について、いつでもお問い合わせください。開発者が直接お答えします。',
      contactTitle: 'お問い合わせ',
      contactBody: 'ご質問・ご要望・不具合のご報告は、下のメールアドレスまでお送りください。通常2〜3営業日以内に返信します。不具合の場合は、お使いの OS（Windows / macOS とそのバージョン）と、どの操作で起きたかを書き添えていただけると調査が早くなります。',
      email: 'cubicenginestudio@icloud.com',
      faqTitle: 'よくあるご質問',
      faq: [
        {
          q: '取り込みたいアプリが一覧に出てきません',
          a: 'macOS では「画面収録」の許可が必要です。システム設定 → プライバシーとセキュリティ → 画面収録 で CMCUBE を許可し、アプリを再起動してください。また、排他フルスクリーンのゲームは一覧に出ません。ゲーム側の設定をボーダーレスウィンドウに変えるか、「画面ぜんぶ」を選んでください。',
        },
        {
          q: '録画した動画はどこに保存されますか',
          a: 'macOS では ~/Movies/CMCUBE、Windows ではビデオフォルダの CMCUBE に保存されます。録画を止めると自動で保存され、フォルダが開きます。',
        },
        {
          q: '録画に音が入りません（Mac）',
          a: 'macOS 版では、アプリ自身が鳴らす音（効果音・BGM）とマイクは録音されますが、取り込んだゲームやアプリの音は録音されません。macOS では他のアプリの音を取り込む仕組みをアプリ側から使えないためです。ゲーム音も残したい場合は Windows 版をお使いください。なお 1.1.9 では効果音と BGM も入らない不具合がありました。1.2.0 で直っています。',
        },
        {
          q: 'ゲームを操作しながらテロップを出せません',
          a: 'バージョン 1.3.0 から、録画中に押す操作は要りません。録画前に「出す文字」を入れておくと、録画の長さに合わせて自動で出ます。ゲームの画面をクリックして遊ぶだけです。',
        },
        {
          q: '追加フレームを買ったのに反映されません',
          a: 'Mac App Store 版では、右の「② フレームを選ぶ」で鍵マーク（🔒）の付いたフレームを押し、出てくる画面の「購入を復元」を押してください。直接ダウンロード版（PayPal でご購入の場合）は、購入した端末でのみ有効になります。解決しない場合はご購入日時を添えてご連絡ください。',
        },
        {
          q: '動作環境を教えてください',
          a: 'Windows 10 / 11（64bit）と macOS（Intel / Apple Silicon）に対応しています。スマートフォンには対応していません。',
        },
      ],
      backLabel: '← {product} のページに戻る',
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
        'Pick your screen, type your words, press Start. No complicated settings.',
        'Captions appear on their own. The only thing to press is "Stop & save" when you are done.',
        'Already have a clip? Lay a frame and captions straight over it.',
        'Stop recording and an MP4 is waiting. No conversion, no editing.',
      ],
      buyLabel: 'Download Free',
      inAppPurchaseNote: '※ Free Download (In-app purchase available: Additional Frames ¥300)',
      // ⚠️ **日本語版と同じ直リンクにした**（2026-08-23）。
      //    前は Ko-fi の商品ページへ飛ばしていたが、無料にしたので
      //    売り場を経由する理由がなくなった。売り場は言語で分ける必要が
      //    あったが、ファイルを直接渡すなら1つで足りる
      buyHref: 'https://github.com/hahaCH314/cmcube-download/releases/latest/download/CMCUBE-Setup.exe',
      startedNote: 'Downloading. Please wait (325MB).',
      buyLabelMac: 'Download for Mac',
      buyHrefMac: 'https://github.com/hahaCH314/cmcube-download/releases/latest/download/CMCUBE-mac.dmg',
      startedNoteMac: 'Downloading. Please wait (446MB). When it opens, drag CMCUBE into your Applications folder.',
      openTitle: 'If you see a blue warning screen',
      openSteps: [
        'Double-click the downloaded file',
        'When "Windows protected your PC" appears, click the blue "More info" link',
        'Click "Run anyway"',
      ],
      openNote: 'This notice appears because the app is not code-signed. It does not mean anything is wrong with the app. Signing certificates carry a yearly cost, so we have not purchased one yet.',
      requirement: 'For Windows 10 / 11 and macOS (Intel and Apple Silicon). This app does not run on smartphones.',
      // ⚠️ 日本語版と同じ理由で「free」と言い切らない（¥300 の買い切りがある）
      // ⚠️ 理由は ja 側のコメント参照
      phoneNote: 'On a phone? tinyCUBE lays your voice and effects over a video you already shot, in one take. Now available on the App Store and Google Play!',
      phoneLabel: 'View on App Store',
      phoneHref: 'https://apps.apple.com/app/id6803792204',
      phoneLabel2: 'View on Google Play',
      phoneHref2: 'https://play.google.com/store/apps/details?id=com.cubicenginestudio.tinycube.app',
      macStoreNote: 'On a Mac, you can also get it from the App Store.',
      macStoreLabel: 'View on the Mac App Store',
      macStoreHref: 'https://apps.apple.com/app/id6811258789',
    },
    features: {
      accent: 'CORE',
      rest: ' FEATURES',
      items: [
        {
          title: '🖼 54 Landscape and 29 Portrait Frames',
          body: 'Frames for landscape (16:9) and for vertical video (9:16) on TikTok, YouTube Shorts and Reels. Just pick a picture and your screen instantly looks like an ad. All 29 portrait frames and 38 landscape ones come with effects animated to match the art. 4 are free, including the pink "fave color" frame to try; the rest all unlock with the additional frames pack (¥300).',
        },
        {
          title: '🔠 Captions That Appear By Themselves',
          body: 'Up to three bold gold captions. Put them in "start / middle / end" and they pop in on their own at the start, partway through, and when you stop. One-tap phrases like "LET\'S GO!!" are ready to drop in.',
        },
        {
          title: '🎮 Just Play, Then Stop',
          body: 'Capture your game or app from its own window. Once recording starts, click your game and play. Captions appear automatically, and it keeps recording, with no length limit, until you press "Stop & save". One person, one take.',
        },
        {
          title: '🎥 Use a Clip You Already Have',
          body: 'Load a video shot on your phone or console. It plays from the start, with a frame and captions laid over it. There is no length limit.',
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
          body: 'Kids can enjoy a safe, simulated live streaming experience while playing. There are only three things to do, so no PC experience is needed, giving parents peace of mind!',
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
          title: '4. Responsible use (please read before downloading)',
          body: 'CMCUBE records your screen as it is. Anything visible in a captured window — chats, email, notifications, names — ends up in the video, and a video once published cannot be taken back. Do not record screens containing other people’s personal information. For game footage, video, music, images and other material owned by third parties, follow each rights holder’s terms when deciding whether you may use it. Get consent from anyone you film or record. Using CMCUBE to demean people or to mislead is strictly prohibited.',
        },
      ],
    },
    privacy: {
      accent: 'Privacy',
      rest: ' Policy',
      updated: 'Last updated: October 18, 2026',
      sections: [
        {
          title: 'Information we collect',
          body: 'CMCUBE does not require an account and does not collect personal information such as your name, email address, or date of birth.',
        },
        {
          title: 'Camera and microphone',
          body: 'CMCUBE does not use the camera or the microphone in its current screens. If a feature that uses them is offered, the video and audio are processed entirely on your own computer and are never sent to any server.',
        },
        {
          title: 'Your recordings',
          body: 'Recorded videos are saved on your own computer (~/Movies/CMCUBE on macOS, the Videos folder on Windows). CUBICENGINEstudio never receives or views their contents.',
        },
        {
          title: 'Network access',
          body: 'On launch, the app reads version.json from this site to check whether a newer release is available. No personal information is sent with this request. As with any web server, the connecting IP address may appear in standard access logs.',
        },
        {
          title: 'Analytics and advertising',
          body: 'The app contains no analytics, advertising, or behavioural tracking of any kind.',
        },
        {
          title: 'Sharing with third parties',
          body: 'Because no personal information is collected, there is nothing to share with third parties.',
        },
        {
          title: 'Contact',
          body: 'For questions about this policy, please write to cubicenginestudio@icloud.com.',
        },
        {
          title: 'Changes',
          body: 'Any change to this policy will be posted on this page.',
        },
      ],
      backLabel: '← Back to the {product} page',
    },
    support: {
      accent: 'Support',
      rest: '',
      lead: 'Questions about CMCUBE, or something not working? Get in touch any time and the developer will reply.',
      contactTitle: 'Contact us',
      contactBody: 'Send questions, requests and bug reports to the address below. We normally reply within two to three business days. For bugs, telling us your OS (Windows or macOS, and the version) and what you were doing helps us a lot.',
      email: 'cubicenginestudio@icloud.com',
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'The app I want to capture is not in the list',
          a: 'macOS requires Screen Recording permission. Open System Settings > Privacy & Security > Screen Recording, allow CMCUBE, then restart the app. Games running in exclusive full screen never appear in the list; switch the game to borderless window, or pick "Whole screen" instead.',
        },
        {
          q: 'Where are my recordings saved?',
          a: 'To ~/Movies/CMCUBE on macOS, and to CMCUBE in your Videos folder on Windows. The file is saved as soon as you stop recording, and the folder opens automatically.',
        },
        {
          q: 'My recording has no sound (Mac)',
          a: 'On macOS, sounds the app itself plays (sound effects and background music) and your microphone are recorded, but audio from the app or game you capture is not. macOS does not let an app capture another app\'s audio through the interface we use. If you need the game audio in the file, use the Windows version. Note that in 1.1.9 the sound effects and music were missing too; that is fixed in 1.2.0.',
        },
        {
          q: 'Captions do not fire while I am playing a game',
          a: 'From version 1.3.0 you do not press anything while recording. Type your captions before you start and they appear automatically, spaced across the length of the clip. Just click your game and play.',
        },
        {
          q: 'I bought the extra frames but they are still locked',
          a: 'On the Mac App Store version, in "② Pick a frame" press a frame with a lock icon (🔒), then press Restore Purchases on the screen that opens. On the direct download version (bought through PayPal), the unlock applies to the computer you bought it on. If that does not help, write to us with the date of purchase.',
        },
        {
          q: 'What are the system requirements?',
          a: 'Windows 10 / 11 (64-bit) and macOS (Intel and Apple Silicon). Phones are not supported.',
        },
      ],
      backLabel: '← Back to the {product} page',
    },
    footer: '© 2026 CUBICENGINEstudio. All rights reserved.',
  },
};
