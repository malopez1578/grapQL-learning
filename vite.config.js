import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { EsLinter, linterPlugin } from "vite-plugin-linter";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    linterPlugin({
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      linters: [new EsLinter({ configEnv })],
    }),
    react()
  ]
})
