import Unocss from "./config/unocss";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(), // 添加UnoCSS插件
    Unocss(),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  // 添加库模式配置

  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "HammerDesign",
      fileName: "hammer-design",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
