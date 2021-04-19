// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pascal Chorus',
  siteUrl: 'https://pascalchorus.de',
  siteDescription:
    'Private Webseiten, Internetauftritte für kleine und mittelständische Unternehmen, individuelle Web-Apps und Desktopanwendungen.',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
  ],
};
