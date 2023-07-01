import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: "/",  
  lang: "zh-CN",
  title: "AlphaBlog",
  description: "AlphaBlog 是为所有人提供的学习网站",

  theme,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
})
