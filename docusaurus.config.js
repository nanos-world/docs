const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'nanos world',
  tagline: 'nanos world',
  url: 'https://docs.nanos-world.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nanos-world',
  projectName: 'docs',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: isDev ? ['en'] : ['en', 'fr', 'pt-BR'],
    localeConfigs: {
      en: {
        label: '🇬🇧 English'
      },
      'pt-BR': {
        label: '🇧🇷 Português (Brasil)'
      },
      fr: {
        label: '🇫🇷 Français'
      },
    }
  },
  // Hacky solution, dev uses external, which is not included in the build
  staticDirectories: isDev ? ['external', 'public', 'static'] : ['public', 'static'],
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
        href: 'https://nanos-world.com/'
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
          to: '/changelog/',
          label: 'changelog',
          position: 'left'
        },
        {
          to: '/roadmap/',
          label: 'roadmap',
          position: 'left'
        },
        {
          to: '/feedback/',
          label: 'feedback',
          position: 'left'
        },
        {
          href: 'https://discord.nanos-world.com',
          position: 'right',
          className: 'header-right-link header-discord-link',
          'aria-label': 'Discord',
        },
        {
          href: 'https://github.com/nanos-world',
          position: 'right',
          className: 'header-right-link header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://issues.nanos-world.com',
          position: 'right',
          className: 'header-right-link header-bugs-link',
          'aria-label': 'Bugs',
        },
        {
          href: 'https://status.nanos-world.com',
          position: 'right',
          className: 'header-right-link header-status-link',
          'aria-label': 'Status',
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
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer').themes.vsLight,
      darkTheme: require('prism-react-renderer').themes.vsDark,
      additionalLanguages: [
        'lua',
        'toml',
        'bash'
      ],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      config: {
        margin: 70,
      }
    },
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
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== 'en') {
              return `https://crowdin.com/project/nanos-world-docs/${locale}`;
            }
            // forces bleeding-edge version
            return `https://github.com/nanos-world/docs/edit/master/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: 'bleeding-edge 🩸',
            },
            latest: {
              label: 'latest - a1.91.x ⚖️',
            }
          },
        },
        blog: {
          feedOptions: {
            type: 'json',
            limit: 2
          },
          showReadingTime: true,
          editUrl: ({ locale, blogDirPath, blogPath }) => {
            if (locale !== 'en') {
              return `https://crowdin.com/project/nanos-world-docs/${locale}`;
            }
            return `https://github.com/nanos-world/docs/edit/master/${blogDirPath}/${blogPath}`;
          },
          blogTitle: 'news',
          blogDescription: 'All official news from nanos world!',
          blogSidebarTitle: 'nanos world news',
          blogSidebarCount: 'ALL',
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    '@saucelabs/theme-github-codeblock',
    '@docusaurus/theme-mermaid',
  ],
   markdown: {
    mermaid: true,
	hooks: {
      onBrokenMarkdownLinks: 'warn',
	}
  },
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
  scripts: [
    {
      src: 'https://plausible.nanos-world.com/js/script.hash.outbound-links.pageview-props.tagged-events.js',
      defer: true,
      "data-domain": "docs.nanos-world.com"
    },
    {
      src: '/js/Plausible.js',
      async: false,
    },
    {
      src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
      async: false,
    },
    {
      src: '/js/Kofi.js',
      async: false,
    },
    {
      src: '/js/img-comparison-slider.js',
      async: false,
    }
  ]
};
