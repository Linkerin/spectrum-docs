import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Spectrum API Docs',
      description:
        'Spectrum is a lightweight JS / TS library designed to simplify color manipulation and conversion tasks',
      customCss: ['./src/styles/tokens.css'],
      editLink: {
        baseUrl: 'https://github.com/Linkerin/spectrum-docs/edit/main/'
      },
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
            { label: 'hexToRgb()', link: '/docs/hex-to-rgb' },
            { label: 'hslToRgb()', link: '/docs/hsl-to-rgb' },
            { label: 'invert()', link: '/docs/invert' },
            { label: 'rgbObjToHex()', link: '/docs/rgb-obj-to-hex' },
            { label: 'rgbObjToHsl()', link: '/docs/rgb-obj-to-hsl' },
            { label: 'setHsl()', link: '/docs/set-hsl' },
            { label: 'setRgb()', link: '/docs/set-rgb' },
            { label: 'Types', link: '/docs/types' }
          ]
        },
        {
          label: 'Contacts',
          link: '/contacts/'
        }
      ]
    })
  ]
});
