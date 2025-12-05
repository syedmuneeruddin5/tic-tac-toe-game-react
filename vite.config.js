import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createViteLicensePlugin } from 'rollup-license-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), createViteLicensePlugin()],
})
