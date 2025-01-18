// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'node18',
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
      fileName: 'main'
    },
    ssr: {
        target: 'node',
        noExternal: []
      },
    rollupOptions: {
      external: ['express']
    }
  }
})

