module.exports = {
  title: 'IdentityChain',
  head: [
    ['link', { rel: 'icon', type: `image/png`, sizes: `16x16`, href: `/icons/favicon-16x16.png` }],
    ['link', { rel: 'icon', type: `image/png`, sizes: `32x32`, href: `/icons/favicon-32x32.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css', integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ', crossorigin: 'anonymous' }],
    ['script',{ src: 'https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js' }]
  ],
  serviceWorker: true,
  theme: 'cool',
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2,3, 4] },
    config: md => {
      md.use(require("markdown-it-plantuml"))
    }
  },
  themeConfig: {
    logo: '/square-logo300x300.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'APIs Doc',
        items: [
          { text: 'Node API', link: '/apis/node' },
          { text: 'Schema Compiler', link: '/apis/schema' },
          { text: 'Government', link: '/apis/government' },
          { text: 'Chamber of Commerce (KvK)', link: '/apis/kvk' },
        ]
      },
      { text: 'Github', link: 'https://github.com/ID-Chain' },
    ]
  }
}
