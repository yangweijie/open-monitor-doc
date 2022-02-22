module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'open monitor 文档',
  description: '基于 thinkPHP 的开源免费监控',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // navbar:true,
    logo: 'https://vuejs.org/images/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '采集器', link: '/think-inspector' },
      { text: '监控面版', link: '/open-monitor' },
    ],
  },


  base: "/",
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}
