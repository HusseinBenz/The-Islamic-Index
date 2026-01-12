import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  title: 'The Islamic Index',
  description: 'An organized hub of Islamic online resources.',
  base: '/The-Islamic-Index/',

  locales: {
    root: { label: 'English', lang: 'en-US', dir: 'ltr' },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        [
          'link',
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Aref+Ruqaa:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Playpen+Sans+Arabic:wght@100..800&display=swap'
          }
        ]
      ],
      themeConfig: {
        outline: {
          label: '\u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629'
        },
        notFound: {
          title: 'الصفحة غير موجودة',
          quote: 'لم نتمكن من العثور على الصفحة',
          linkText: 'العودة إلى الصفحة الرئيسية',
          linkLabel: 'العودة إلى الصفحة الرئيسية'
        }
      }
    },
    zh: { label: '简体中文', lang: 'zh-Hans', dir: 'ltr' },
    pt: { label: 'Português', lang: 'pt-BR', dir: 'ltr' },
    ru: { label: 'Русский', lang: 'ru-RU', dir: 'ltr' },
    es: { label: 'Español', lang: 'es', dir: 'ltr' },
    ko: { label: '한국어', lang: 'ko-KR', dir: 'ltr' },
    fa: { label: 'فارسی', lang: 'fa-IR', dir: 'rtl' },
    ja: { label: '日本語', lang: 'ja', dir: 'ltr' }
    },


  themeConfig: {
    nav: nav(),

    
    socialLinks: [
    { icon: 'github', link: 'https://github.com/HusseinBenz/The-Islamic-Index' }
    ],

    sidebar: {
      '/guide/': { base: '/guide/'},
      '/reference/': { base: '/reference/'},
      '/topics/quran/': [
        {
          text: 'Quran',
          items: [
            {
              text: 'Read and Listen to Quran Online',
              link: '/topics/quran/#read-and-listen-to-quran-online'
            },
            { text: 'Read Quran Online', link: '/topics/quran/#read-quran-online' },
            {
              text: 'Listen to Quran Online',
              link: '/topics/quran/#listen-to-quran-online'
            }
          ]
        }
      ]
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
    }/*,
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
    }*/
  ]
}



