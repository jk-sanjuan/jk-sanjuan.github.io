import { resolve } from 'path'
import {defineConfig} from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'

export default defineConfig({
    plugins: [
        vue(),
        WindiCSS(),
        RubyPlugin(),
        components({
            dirs: [resolve(__dirname, '_frontend/components')],
            resolvers: [

            ]
        })
    ],
})
