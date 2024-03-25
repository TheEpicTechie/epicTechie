import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


const cssFileName = 'index.min.css'

const __dirname = path.resolve();


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // This above line is used to import files or modules relative to the src directory in project
      // Eg: src/components/example.js -> import Example from "@/components/example.js";
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
