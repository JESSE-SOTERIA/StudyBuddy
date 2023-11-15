import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#000000',
        customGreen: '#10D570',
        customWhite: '#FFFFFF',
        customDarkGreen: '#025908',
        customLightGreen: '#04D912'
      }
    }
  },
  plugins: [],
}
export default config
