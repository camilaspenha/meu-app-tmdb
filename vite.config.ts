import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/meu-app-tmdb/', // <- substitua aqui
  plugins: [react()],
})
