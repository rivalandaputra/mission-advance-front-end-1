// ========================================
// 1. IMPORT
// Mengimpor plugin React dan konfigurasi Vite.
// ========================================

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// ========================================
// 2. KONFIGURASI VITE
// Mengatur plugin dan base path aplikasi.
// ========================================

export default defineConfig({
  plugins: [react()],

  // Mengatur base path untuk GitHub Pages.
  // Jika bukan GitHub Pages, gunakan root domain.
  base: process.env.GITHUB_PAGES
    ? '/mission-2-movie-react-js/'
    : '/',
})
