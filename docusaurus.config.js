const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'nanos world',
  tagline: 'nanos world',
  url: 'https://docs.nanos.world/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nanos-world',
  projectName: 'docs',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: isDev ? ['en'] : ['en', 'pt-BR', 'de', 'fr'],
    localeConfigs: {
      en: {
        label: '🇬🇧 English'
      },
      'pt-BR': {
        label: '🇧🇷 Português (Brasil)'
      },
      de: {
        label: '🇩🇪 Deutsch'
      },
      fr: {
        label: '🇫🇷 Français'
      },
    }
  },
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
          href: 'https://auth.nanos.io',
          label: 'account',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              href: 'https://crowdin.com/project/nanos-world-docs/',
              label: 'Help Us Translate',
            },
          ],
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
    algolia: {
      appId: '2O07FIGQII',
      apiKey: 'b53f482139534494c9253752259660ed',
      indexName: 'nanos',
      contextualSearch: true,
      aggregateContent: true,
    },
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
              label: 'bleeding-edge 🩸',
            },
            latest: {
              label: 'latest - a1.5.0 ⚖️',
            }
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
  themes: [
    '@saucelabs/theme-github-codeblock',
  ],
  plugins: [
    'plugin-image-zoom',
  ],
  scripts: [
    {
      src: 'https://pac.nanos.io/js/script.js',
      async: true,
      "data-domain": "docs.nanos.world"
    }
  ]
};
