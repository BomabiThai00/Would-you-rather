import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(), 
    svgr({ 
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg'
    })
  ],
  build: {
    outDir: 'build', // Keeps the output folder named 'build' like CRA used to
  },
  server: {
    open: true, // Automatically open browser on start
    port: 3000, // Keep running on port 3000
  },
});