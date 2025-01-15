import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'./',
  // base: process.env.NODE_ENV === 'prod',
  plugins: [react()],
})