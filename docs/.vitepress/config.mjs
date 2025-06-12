import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
import { getSidebar } from './utils/getSidebar';

export default defineConfig({
  // 标签上显示的网站标题
  lang: 'en-US',
  title: 'Media Buy Studio',
  // titleTemplate: 'Blog',
  // 在标签上显示所的 logo
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  // 网站描述，有利于被搜索引擎捕获
  description:
    'Media Buy Practical School: Let Every Point of Advertising Cost Long on Transformation',

  // md 文件根目录
  // 【谨慎修改】：一旦修改将引起较多变动
  srcDir: './src',

  // 主题自定义
  themeConfig: {
    // 网站左上角 logo
    logo: '/favicon.ico',
    // 顶部导航栏
    nav: [
      { text: '👋 About', link: '/AboutMe.md' },
      { text: '🦄 Offers', link: '/Notes/index' },
      // { text: '🦄 Projects', link: 'Projects.md' },
      // { text: '👫 Friends', link: 'Friends.md' },
    ],
    // 顶部导航栏左侧的社交平台跳转
    // socialLinks: [{ icon: 'github', link: 'https://github.com/ZbWeR' }],
    // 首页底部版权声明
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()}-present nero_cho@163.com`,
    },
    // 【文章页面左侧导航】
    sidebar: {
      '/Notes/': getSidebar('/docs/src', '/Notes/'),
    },
    // 文章内导航栏标题
    outlineTitle: 'Navigation',
    // 是否启动搜索功能
    search: {
      provider: 'local',
    },
  },
  // 数学公式支持
  markdown: {
    math: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
  },
  // !请勿修改
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/UpdateTime.vue', import.meta.url)
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/Footer.vue', import.meta.url)
          ),
        },
      ],
    },
  },
  lastUpdated: true,
});
