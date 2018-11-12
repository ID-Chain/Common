module.exports = {
  title: "IdentityChain",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: `image/png`,
        sizes: `16x16`,
        href: `/icons/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: `image/png`,
        sizes: `32x32`,
        href: `/icons/favicon-32x32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#2a5fb7" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#2a5fb7"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
        integrity:
          "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
        crossorigin: "anonymous"
      }
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"
      }
    ]
  ],
  ga: 'UA-129020720-1',
  serviceWorker: true,
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2, 3, 4] },
    config: md => {
      md.use(require("markdown-it-plantuml"));
    }
  },
  themeConfig: {
    logo: "/square-logo300x300.png",
    search: true,
    searchMaxSuggestions: 10,
    // algolia: {
    //   apiKey: '81f9b19ecec0e6926444ad6874a1d4e6',
    //   indexName: '1HX1AKD42A'
    // },
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },
    ga: 'UA-129020720-1',
    nav: require("./nav/en"),
    sidebar: require("./sidebars/en")
  }
};
