// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cheatsheet",
  tagline: "To infinity and beyond !",
  url: "https://alban-care.github.io",
  baseUrl: "/cheatsheet/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Alban-Care", // Usually your GitHub org/user name.
  projectName: "cheatsheet", // Usually your repo name.
  deploymentBranch: "gh-pages", // Le nom de la branche de déploiement. Par défaut, 'gh-pages' pour les pages GitHub.
  trailingSlash: false, //GitHub Pages ajoute par défaut un slash final aux URL Docusaurus. Il est recommandé de définir une configuration trailingSlash (true ou false, pas undefined).

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Alban-Care/cheatsheet/blob/main/", // Changing the path to repo
        },
        blog: false, // Deleting the blog configuration and deactivating it
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true, // Adding color mode configuration
      },
      navbar: {
        title: "Cheatsheet", // Changing site name
        hideOnScroll: false, // Navbar always showed
        logo: {
          alt: "Elephant Logo",
          src: "img/logo_black.svg", // Changing file in static/img
          srcDark: "img/logo_white.svg", // Adding dark mode logo
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "htmlSidebar",
          //   position: "left",
          //   label: "html",
          // },
          {
            type: "docSidebar",
            sidebarId: "cssSidebar",
            position: "left",
            label: "css",
          },
          {
            type: "docSidebar",
            sidebarId: "othersSidebar",
            position: "left",
            label: "divers",
          },
          {
            type: "docSidebar",
            sidebarId: "plusSidebar",
            position: "left",
            label: "+",
          },
          {
            href: "https://github.com/Alban-Care/cheatsheet/", // Changing the path to repo
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [], // Cleaning footer links
        copyright: `Copyright © ${new Date().getFullYear()} Alban Caré - Cheatsheet, Icons &#128525; by svgrepo.com, Inc. Built with Docusaurus.`, // Updating string
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
