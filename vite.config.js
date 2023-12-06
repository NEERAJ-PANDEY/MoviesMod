import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import adapter from '@sveltejs/adapter-vercel';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
