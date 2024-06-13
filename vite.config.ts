import { resolve } from 'path'
import {defineConfig} from 'vite'
import windicss from 'vite-plugin-windicss'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import components from 'unplugin-vue-components/vite'

export default defineConfig({
    // define: {
    //     __VUE_PROD_DEVTOOLS__: true
    // },
    plugins: [
        vueDevTools({
            componentInspector: true
        }),
        vue(),
        RubyPlugin(),
        components({
            dirs: [resolve(__dirname, '_frontend/components')],
            resolvers: [

            ]
        }),
        windicss(),
    ],
})
