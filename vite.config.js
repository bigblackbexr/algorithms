import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '/algorithms/',

  build: {
    commonjsOptions: {
      include: ['tailwind-config.cjs', 'node_modules/**'],
    },
  },

  optimizeDeps: {
    include: ['tailwind-config'],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'tailwind-config': path.resolve(__dirname, './tailwind.config.cjs'),
    }
  }
})
