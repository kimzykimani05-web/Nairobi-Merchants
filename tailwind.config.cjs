module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0F172A',
          blue: '#2563EB'
        },
        secondary: {
          emerald: '#10B981',
          orange: '#F97316'
        },
        neutral: {
          white: '#FFFFFF',
          light: '#F8FAFC',
          medium: '#E2E8F0',
          dark: '#334155'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 30%, #2563EB 70%, #60A5FA 100%)',
        'hero-premium': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 35%, #2563EB 70%, #60A5FA 100%)',
        'cta-gradient': 'linear-gradient(135deg, #2563EB 0%, #10B981 100%)'
      }
    },
  },
  plugins: []
}