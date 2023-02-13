import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';

import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

import AutoImport from 'unplugin-auto-import/vite';

import Unocss from 'unocss/vite';
import { presetAttributify, presetUno, presetIcons } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve', // 开发环境启用
        watchFiles: true
      }),
      AutoImport({
        dts: false,
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json'
        }
      }),
      Components({
        dts: false,
        resolvers: [
          IconsResolver({
            customCollections: ['sy']
          })
        ]
      }),
      Icons({
        compiler: 'vue3',
        customCollections: {
          sy: FileSystemIconLoader('src/assets/svgs', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          )
        }
      }),
      Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()],
        rules: [['cursor', { cursor: 'pointer' }]]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  };
});
