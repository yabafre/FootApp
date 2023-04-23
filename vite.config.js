import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import EnvironmentPlugin from 'vite-plugin-environment'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    EnvironmentPlugin({
          NODE_ENV: 'development',
        }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
