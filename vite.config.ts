import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      layouts: '/src/layouts',
      modules: '/src/modules',
      pages: '/src/pages',
      routes: '/src/routes',
      services: '/src/services',
      store: '/src/store',
    },
  },
})
