import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Tokushoho from './Tokushoho.tsx'
import Privacy from './Privacy.tsx'
import { content, type Lang } from './content'

// /en/ 配下なら英語、それ以外は日本語。ビルド時に index.html と en/index.html の
// 2ページを出すので、ルーターを足さずに実URLで言語を切り替えられる。
const path = window.location.pathname
const lang: Lang = path.startsWith('/en') ? 'en' : 'ja'

// 特商法は同じ仕組みで足した3枚目のページ（/tokushoho/）。ja 専用。
const isTokushoho = path.startsWith('/tokushoho')

// プライバシーポリシーも同じ仕組み。ストアが掲載を必須にしているので ja / en 両方ある。
// /en/privacy/ は上の lang 判定（/en 前方一致）で英語になる
const isPrivacy = path.startsWith('/privacy') || path.startsWith('/en/privacy')

document.documentElement.lang = content[lang].htmlLang
// 特商法・プライバシーポリシーのタイトルは各 index.html 側で持っているので上書きしない
if (!isTokushoho && !isPrivacy) {
  document.title = content[lang].pageTitle
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isTokushoho ? <Tokushoho lang={lang} /> : isPrivacy ? <Privacy lang={lang} /> : <App lang={lang} />}
  </StrictMode>,
)
