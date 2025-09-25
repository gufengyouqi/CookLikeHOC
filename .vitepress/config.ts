import { defineConfig } from 'vitepress'
import { generateNavAndSidebar } from './navSidebar'

const { nav, sidebar } = generateNavAndSidebar(process.cwd())

export default defineConfig({
  lang: 'zh-CN',
  title: 'let us cook, 一起烹饪',
  description: '像老乡鸡那样做饭,炒菜,炖菜,烤类,凉拌,卤菜,配料,砂锅菜,汤,烫菜,饮品,早餐,炸品,蒸菜,主食,煮锅',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    // 添加Google广告脚本
    ['script', { 
      async: '',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9801793223525813',
      crossorigin: 'anonymous'
    }]
  ],
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
    footer:{
      // 添加友链，乡村电视：https://tv.xiangcunlu.com,乡村菜谱:https://cook.xiangcunlu.com
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021001985号-1</a> | <a href="https://tv.xiangcunlu.com" target="_blank">乡村电视</a> | <a href="https://cook.xiangcunlu.com" target="_blank">乡村菜谱</a>'
      
    },
    lastUpdatedText: '上次更新',
  },
  vite: {
    server: { host: true },
  },
})