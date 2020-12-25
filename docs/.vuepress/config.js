module.exports = {
  title: "板砖的博客",
  description: "干货全没有，上班不赚钱",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
  themeConfig: {
    logo: "/imgs/home.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "前端", link: "/webframe/" },
      {
        text: "面试",
        items: [
          { text: "HTML&CSS", link: "/interview/basic" },
          { text: "JavaScript", link: "/interview/javascript" },
          { text: "Vue", link: "/interview/vue" },
          { text: "React", link: "/interview/React" },
          { text: "Webpack", link: "/interview/webpack" },
          { text: "Node", link: "/interview/node" },
          { text: "TypeScript", link: "/interview/typescript" },
          { text: "HTTP", link: "/interview/http" },
        ],
      },
      {
        text: "工具",
        items: [
          { text: "软件", link: "/tool/software/" },
          { text: "网址", link: "/tool/website/" },
        ],
      },
    ],
    sidebar: "auto", //自动设置侧边栏
    lastUpdated: "Last Updated", //最后更新时间
  },
  plugins: [
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"], // 加载进度条
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        options: {
          el: "#valine-vuepress-comment",
          appId: "Bj9lJHy7CLHPIcktBgvqxYGf-gzGzoHsz",
          appKey: "1zjNJuYxtJrl2wRUSphwIOCL",
        },
      },
    ],
  ],
};
