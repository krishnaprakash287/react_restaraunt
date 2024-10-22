import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Merge both configurations into one
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'  // Ensure the build directory is 'build'
  }
})
