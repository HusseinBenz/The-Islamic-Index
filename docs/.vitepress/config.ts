import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  title: 'The Islamic Index',
  description: 'An organized hub of Islamic online resources.',
  base: '/The-Islamic-Index/',

  themeConfig: {
    nav: nav(),

    socialLinks: [
    { icon: 'github', link: 'https://github.com/HusseinBenz/The-Islamic-Index' }
    ],

    sidebar: {
      '/guide/': { base: '/guide/'},
      '/reference/': { base: '/reference/'}
    },

    editLink: {
      pattern: 'https://github.com/HusseinBenz/The-Islamic-Index/',
      text: 'Edit this page on GitHub'
    },

  footer: {
    message: 'Released freely, with no license attached. May it be of benefit to every heart-Muslim and non-Muslim alike 🤍',
    copyright: 'This project is based on Vitepess. Thanks to Evan You 🌱'
    }

    
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'About Us',
      link: '/about-us/',
      activeMatch: '/about-us/'
    },
    {
      text: 'Contact Us',
      link: '/contact-us/',
      activeMatch: '/contact-us/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: '1.6.4',
          link: 'https://vuejs.github.io/vitepress/v1/'
        },
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}
