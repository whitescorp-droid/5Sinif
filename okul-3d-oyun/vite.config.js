import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: '../dist/oyun',
    emptyOutDir: true
  },
  server: {
    host: true, // Yerel ağdaki cihazlardan (telefon, tablet vb.) erişime izin verir
    port: 5173
  }
})
