import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site (BenSarks.github.io) is served from the domain root, so base is '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
