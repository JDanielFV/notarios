import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/notarios/',  // ¡Imprescindible: con slash al final!
})