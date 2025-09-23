import { defineConfig } from 'vitepress'
import { generateNavAndSidebar } from './navSidebar'

const { nav, sidebar } = generateNavAndSidebar(process.cwd())

export default defineConfig({
  lang: 'zh-CN',
  title: 'let us cook, 一起烹饪',
  description: '像老乡鸡那样做饭,炒菜,炖菜,烤类,凉拌,卤菜,配料,砂锅菜,汤,烫菜,饮品,早餐,炸品,蒸菜,主食,煮锅',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      ...nav,
      // { text: 'GitHub', link: 'https://github.com/Gar-b-age/CookLikeHOC' },
    ],
    sidebar,
    search: {
      provider: 'local'
    },
    outline: [2, 3],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdatedText: '上次更新',
  },
  vite: {
    server: { host: true },
  },
})
