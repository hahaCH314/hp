import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // 日本語版 (/)、英語版 (/en/)、特商法 (/tokushoho/) を静的なページとして出力する。
      // 特商法は日本の制度なので ja 側にしか対応ページが無い（en/tokushoho は作らない）
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        en: resolve(import.meta.dirname, 'en/index.html'),
        tokushoho: resolve(import.meta.dirname, 'tokushoho/index.html'),
      },
    },
  },
})
