import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'SQL Query Builder',
  tagline: 'Write SQL as code.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alesmenzel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sql-builder/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alesmenzel',
  projectName: 'sql-builder',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/alesmenzel/sql-builder',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/alesmenzel/sql-builder',
          routeBasePath: 'changelog',
          path: './changelog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SQL Builder',
      logo: {
        alt: 'SQL Builder logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Getting started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          // TODO: Does not work...
          // sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        // TODO: Show changelog
        // { to: '/changelog', label: 'Changelog', position: 'left' },
        {
          href: 'https://github.com/alesmenzel/sql-builder',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: 'Created by Aleš Menzel. 🚀',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
