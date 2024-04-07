import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.WEATHER_KEY': JSON.stringify(env.WEATHER_KEY),
      'process.env.NEWS_KEY': JSON.stringify(env.NEWS_KEY),
      'process.env.LATITUDE': JSON.stringify(env.LATITUDE),
      'process.env.LONGITUDE': JSON.stringify(env.LONGITUDE),
      'process.env.NAME': JSON.stringify(env.NAME)
    },
    plugins: [react()],
  }
})