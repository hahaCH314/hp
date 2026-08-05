# CMCUBE 製品HP

アプリ CMCUBE のランディングページ。**会社のHPではない。**

## これは何ではないか

以前は `cubicenginestudio-hp` という名前で、そのせいで会社HPと取り違えられた（会社紹介をこのページに移植して本物の会社HPを畳む、という事故が実際に起きた）。関心事は **CMCUBE / 会社 CUBICENGINEstudio / CUBICENGINE の3つ**。どれの話か曖昧なら訊く。

- アプリ本体は `E:\CMCUBE\app`
- 会社HPは `E:\CUBICENGINEstudio\hp`（Next 14。スタックが違うので書き方を持ち込まない）

## スタック

Vite 8 / React 19 / TypeScript / oxlint。素の CSS。

```
npm run dev      # localhost:5173
npm run build    # tsc -b && vite build
npm run preview
npm run lint
```

## 多言語

**ルーターを入れていない。** Vite の複数エントリで `index.html` と `en/index.html` を静的に2ページ出し、`src/main.tsx` が `location.pathname.startsWith('/en')` を見て言語を決める。文言は `src/content.ts` に日英まとめてあり、`App` は `lang` prop を受け取るだけ。

新しい文言を足すときは `SiteContent` 型 → ja → en の順に3箇所。

## 落とし穴

- `<link rel="alternate" hreflang>` に `href="/"` を書くと Vite の build-html が **EISDIR で落ちる**。公開ドメインが決まって絶対URLにできるまで入れない
- `.hero p` の詳細度が単一クラスより高い。ヒーロー内の要素は `.hero .foo` と書かないと効かない（`.product-name` が 1.2rem に潰された実績あり）
- `dist/index.html` は絶対パスでアセットを読む。`file://` で直接開くと真っ白になる。必ず `npm run dev` か `npm run preview` 経由で見る

## 表記

**「CMCUBE」。PRO は付けない。** サイト内からは削除済み（`grep -r PRO` で0件）。アプリ本体の `package.json` にはまだ残っている。

## 未着手

- 購入ボタン（¥500）は Ko-fi の**トップページ** `https://ko-fi.com/ihafam` に繋いである。Shop に商品を作ったら、その商品ページの直リンクに差し替える
- `.legal` セクションの `id="buy"` は、購入ボタンが外部リンクになったので参照元がない
- ヘッダーロゴは自分のトップに戻るだけ。会社HPのURLが決まったらそこへ繋ぐ
- 未公開。URL未定
