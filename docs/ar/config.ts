import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  title: 'الفهرس الإسلامي',
  description: 'موارد إسلامية مختلفة و متنوعة في مكان واحد',
  base: '/The-Islamic-Index/ar/',
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
     text: 'حرّر هذه الصفحة على GitHub'
    },

    footer: {
      message: 'أُصدر هذا المشروع مجانًا، دون أي ترخيص مرفق. نسأل الله أن يكون فيه نفع لكل قلب — مسلمًا كان أو غير مسلم 🤍',
      copyright: 'هذا المشروع مبني على Vitepress. الشكر لـ Evan You 🌱'
    }

  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'من نحن',
      link: '/ar/about-us/',
      activeMatch: '/ar/about-us/'
    },
    {
      text: 'تواصل معنا',
      link: '/ar/contact-us/',
      activeMatch: '/ar/contact-us/'
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

