/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Blush Pink Palette
        'blush-pink': '#FFE9EE',
        'blush-accent': '#f8cfd4',
        'blush-deep': '#e39cae',
        'blush-gold': '#d1bfa7',
        'blush-white': '#fefefe',
        
        // Additional Pink Shades for Better Gradient Support
        'blush-light': '#FFF5F7',
        'blush-medium': '#FFD1DC',
        'blush-dark': '#D4849A',
        'blush-darker': '#C4758B',
        
        // Complementary Colors
        'cream': '#F5F5DC',
        'pearl': '#F8F6F0',
        'rose-gold': '#E8B4A0',
        'dusty-rose': '#C9A9A6',
        
        // Neutral Grays with Pink Undertones
        'warm-gray': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D1D1D1',
          400: '#B4B4B4',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151',
          900: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'system-ui', 'sans-serif'], 
        fancy: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'blush': '0 4px 25px -5px rgba(227, 156, 174, 0.25), 0 10px 10px -5px rgba(227, 156, 174, 0.04)',
        'pink-glow': '0 0 20px rgba(255, 233, 238, 0.5), 0 0 40px rgba(227, 156, 174, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      gradientColorStops: {
        'blush-gradient': {
          '0%': '#FFE9EE',
          '50%': '#f8cfd4',
          '100%': '#e39cae',
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Custom plugin for glassmorphism utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.glass-strong': {
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.glass-blush': {
          background: 'rgba(255, 233, 238, 0.3)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(227, 156, 174, 0.2)',
        },
        '.text-gradient-blush': {
          background: 'linear-gradient(135deg, #e39cae 0%, #f8cfd4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}