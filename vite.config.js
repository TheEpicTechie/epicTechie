import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


const cssFileName = 'index.min.css'

const __dirname = path.resolve();

const resolvePath = srcPath => path.resolve(__dirname, srcPath);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@components': resolvePath('./src/components'),
      '@shared': resolvePath('./src/components/shared'),
      '@pages': resolvePath('./src/root/pages'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 6177,
  },

  build: {
    manifest: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: (file) => {
          console.log(file);
          return `assets/css/${cssFileName}`
        },
        entryFileNames: (file) => {
          console.log(file);
          return `assets/js/[name].min.js`
        }
      }
    }
  }


})
