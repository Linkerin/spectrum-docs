import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://spectrum.snipshot.dev',
  integrations: [
    starlight({
      title: 'Spectrum API Docs',
      description:
        'Spectrum is a lightweight JS / TS library designed to simplify color manipulation and conversion tasks',
      components: {
        Footer: './src/components/Footer.astro'
      },
      customCss: [
        './src/styles/custom.css',
        '@fontsource/montserrat/400.css',
        '@fontsource/montserrat/600.css',
        '@fontsource/josefin-sans/700.css'
      ],
      editLink: {
        baseUrl: 'https://github.com/Linkerin/spectrum-docs/edit/main/'
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.ico',
            sizes: '32x32'
          }
        },
        {
          tag: 'link',
          attrs: {
            rel: 'sitemap',
            href: '/sitemap-index.xml'
          }
        }
      ],
      lastUpdated: true,
      logo: {
        src: './src/assets/spectrum.svg',
        alt: 'spectrum logo',
        replacesTitle: true
      },
      social: {
        github: 'https://github.com/Linkerin/spectrum'
      },
      sidebar: [
        {
          label: 'About',
          items: [
            { label: 'What is Spectrum?', link: '/docs/about/' },
            { label: 'Getting started', link: '/docs/installation' }
          ]
        },
        {
          label: 'API documentation',
          items: [
            { label: 'Spectrum class', link: '/docs/spectrum-class/' },
            { label: 'adjustHsl()', link: '/docs/adjust-hsl' },
            { label: 'adjustRgb()', link: '/docs/adjust-rgb' },
            { label: 'colorMix()', link: '/docs/color-mix' },
            { label: 'createPalette()', link: '/docs/create-palette' },
            {
              label: 'getSplitComplementary()',
              link: '/docs/get-split-complementary'
            },
            { label: 'getTriadic()', link: '/docs/get-triadic' },
            { label: 'hexToRgb()', link: '/docs/hex-to-rgb' },
            { label: 'hslToRgb()', link: '/docs/hsl-to-rgb' },
            { label: 'invert()', link: '/docs/invert' },
            { label: 'onBgColor()', link: '/docs/on-bg-color' },
            { label: 'rgbObjToHex()', link: '/docs/rgb-obj-to-hex' },
            { label: 'rgbObjToHsl()', link: '/docs/rgb-obj-to-hsl' },
            { label: 'setHsl()', link: '/docs/set-hsl' },
            { label: 'setRgb()', link: '/docs/set-rgb' },
            { label: 'Types', link: '/docs/types' }
          ]
        },
        {
          label: 'Demo Tool',
          link: '/demo/'
        },
        {
          label: 'Contacts',
          link: '/contacts/'
        }
      ]
    })
  ]
});
