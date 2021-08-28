const isDeployPreview =
  process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'nanos world',
  tagline: 'nanos world',
  url: 'https://docs.nanos.world',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nanos-world',
  projectName: 'docs',
  trailingSlash: false,
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'], //isDeployPreview ? ['en'] : ['en', 'fr', 'pt-BR', 'ko', 'zh-CN'],
  // },
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
    navbar: {
      title: 'nanos world',
      logo: {
        alt: 'nanos world',
        src: 'img/nanos-world.png',
        href: 'https://nanos.world/'
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'docs',
        },
        {
          to: '/blog/',
          label: 'news',
          position: 'left'
        },
        {
          href: 'https://roadmap.nanos.world',
          label: 'roadmap',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://discord.nanos.world',
          position: 'right',
          className: 'header-discord-link',
          'aria-label': 'Discord',
        },
        {
          href: 'https://issues.nanos.world',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        //   // dropdownItemsAfter: [
        //   //   {
        //   //     href: 'https://github.com/facebook/docusaurus/issues/3526',
        //   //     label: 'Help Us Translate',
        //   //   },
        //   // ],
        // },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: [
        'lua',
        'toml',
      ],
    },
    zoomSelector: '.markdown :not(.authority-availability) > img',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nanos-world/docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: `bleeding-edge 🩸`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/nanos-world/docs/edit/master/',
          blogTitle: 'nanos world news!',
          blogDescription: 'All official news from nanos world!',
          blogSidebarTitle: 'nanos world news',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],

        createRedirects: function (path) {
          
          console.log(path)
          const allDocHomesPaths = [
            '/docs/',
            '/docs/next/',
            // ...versions.slice(1).map((version) => `/docs/${version}/`),
          ];

          // redirect to /docs from /docs/introduction,
          // as introduction has been made the home doc
          if (allDocHomesPaths.includes(path)) {
            return [`${path}/introduction`];
          }
        },
        // redirects: [
        //   {
        //     from: ['/docs/', '/docs'], // string | string[]
        //     to: '/docs/welcome', // string
        //   },
        // ],
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ]
};
