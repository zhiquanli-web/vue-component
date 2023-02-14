import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

import AutoImport from 'unplugin-auto-import/vite';

import Unocss from 'unocss/vite';
import { presetAttributify, presetUno, presetIcons } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      vueSetupExtend(),
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
          sy: FileSystemIconLoader('examples/assets/svgs', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          )
        }
      }),
      Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()],
        rules: [['cursor', { cursor: 'pointer' }]]
      })
    ],
    build: {
      outDir: 'lib',
      lib: {
        entry: resolve(__dirname, 'packages/index.ts'),
        name: 'Vue3SyComponent',
        fileName: 'vue3-sy-component'
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'vue'
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'examples'),
        '@packages': path.resolve(__dirname, 'packages')
      }
    }
  };
});
