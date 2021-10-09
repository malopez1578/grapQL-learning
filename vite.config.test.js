import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import viteTestPlugin from 'vite-plugin-test'


export default defineConfig({
    esbuild: {
        jsxInject: `import React from 'react'`
    },
    plugins: [
        reactRefresh(),
        viteTestPlugin({ 
            loaders: {
                '.spec.js': 'jsx'
            }
        })
    ]
})
