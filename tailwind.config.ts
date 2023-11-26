import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mb': 'url("/images/mobile/image-hero.jpg")',
        'hero-dt': 'url("/images/desktop/image-hero.jpg")',
        'deep-earth-mb': 'url("/images/mobile/image-deep-earth.jpg")',
        'deep-earth-dt': 'url("/images/desktop/image-deep-earth.jpg")',
        'curiosity-mb': 'url("/images/mobile/image-curiosity.jpg")',
        'curiosity-dt': 'url("/images/desktop/image-curiosity.jpg")',
        'fisheye-mb': 'url("/images/mobile/image-fisheye.jpg")',
        'fisheye-dt': 'url("/images/desktop/image-fisheye.jpg")',
        'grid-mb': 'url("/images/mobile/image-grid.jpg")',
        'grid-dt': 'url("/images/desktop/image-grid.jpg")',
        'from-above-mb': 'url("/images/mobile/image-from-above.jpg")',
        'from-above-dt': 'url("/images/desktop/image-from-above.jpg")',
        'night-arcade-mb': 'url("/images/mobile/image-night-arcade.jpg")',
        'night-arcade-dt': 'url("/images/desktop/image-night-arcade.jpg")',
        'soccer-team-mb': 'url("/images/mobile/image-soccer-team.jpg")',
        'soccer-team-dt': 'url("/images/desktop/image-soccer-team.jpg")',
        'pocket-borealis-mb': 'url("/images/mobile/image-pocket-borealis.jpg")',
        'pocket-borealis-dt': 'url("/images/desktop/image-pocket-borealis.jpg")',
      },
      fontFamily: {
        'body': ['var(--font-alata)'],
        'title': ['var(--font-josefin)'],
      },
    },
  },
  plugins: [],
}
export default config
