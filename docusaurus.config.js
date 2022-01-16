// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'chins',
  tagline: 'site maintained by chin',
  url: 'https://achin.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chin',
  projectName: 'website',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'chin',
          showReadingTime: true,
          routeBasePath: 'blog',
          editUrl: ({locale, blogDirPath, blogPath, permalink}) => {
            return `https://github.com/achinchen/chin.website/${blogDirPath}/${blogPath}`;
          },
          postsPerPage: 10
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: `Chin's note`,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          href: '/blog',
        },
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} by Chin. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
