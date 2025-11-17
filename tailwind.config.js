/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        smartclean: {
          primary: '#1e40af',
          secondary: '#1e3a8a',
          light: '#dbeafe',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      backgroundImage: {
        'smartclean-gradient': 'linear-gradient(135deg, #1e40af 0%, #FFFFFF 100%)',
        'smartclean-radial': 'radial-gradient(circle, #1e40af 0%, #FFFFFF 70%)',
        'smartclean-overlay': 'linear-gradient(135deg, rgba(30, 64, 175, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}