import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { content, type Lang } from './content'

// /en/ 配下なら英語、それ以外は日本語。ビルド時に index.html と en/index.html の
// 2ページを出すので、ルーターを足さずに実URLで言語を切り替えられる。
const lang: Lang = window.location.pathname.startsWith('/en') ? 'en' : 'ja'

document.documentElement.lang = content[lang].htmlLang
document.title = content[lang].pageTitle

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App lang={lang} />
  </StrictMode>,
)
