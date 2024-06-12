import {defineConfig} from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
    plugins: [
        WindiCSS(),
        RubyPlugin(),
    ],
})
