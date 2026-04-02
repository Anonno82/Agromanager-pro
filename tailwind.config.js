/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette
        forest: {
          DEFAULT: '#1A3C34',
          50:  '#EAF2EF',
          100: '#C5DDD5',
          200: '#9FC7B9',
          300: '#79B09D',
          400: '#539A81',
          500: '#2D6A4F',
          600: '#1A3C34',
          700: '#152E28',
          800: '#0F2419',
          900: '#091510',
        },
        amber: {
          harvest: '#E9A825',
          light:   '#F2C25A',
          dark:    '#B8821A',
        },
        surface: {
          DEFAULT: '#0F2419',
          card:    '#1E3D2F',
          raised:  '#243F31',
          border:  '#2A4A3A',
        },
        text: {
          primary: '#F0EDE4',
          muted:   '#8BA89A',
          faint:   '#4A6B5A',
        },
        status: {
          success:  '#4CAF74',
          warning:  '#E9A825',
          danger:   '#E05252',
          info:     '#4A90D9',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'Consolas', 'monospace'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      spacing: {
        sidebar:          '240px',
        'sidebar-collapsed': '64px',
        topbar:           '60px',
      },
      boxShadow: {
        'glow-green':  '0 0 20px rgba(45, 106, 79, 0.4)',
        'glow-amber':  '0 0 20px rgba(233, 168, 37, 0.3)',
        'card':        '0 4px 24px rgba(0, 0, 0, 0.3)',
        'card-hover':  '0 8px 32px rgba(0, 0, 0, 0.4)',
        'modal':       '0 25px 50px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-sidebar':  'linear-gradient(180deg, #0F2419 0%, #1A3C34 100%)',
        'gradient-hero':     'linear-gradient(135deg, #1A3C34 0%, #2D6A4F 100%)',
        'gradient-card':     'linear-gradient(135deg, #1E3D2F 0%, #243F31 100%)',
        'gradient-amber':    'linear-gradient(135deg, #E9A825 0%, #B8821A 100%)',
        'noise':             "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in':      'fadeIn 0.3s ease-out',
        'slide-up':     'slideUp 0.3s ease-out',
        'slide-down':   'slideDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'count-up':     'countUp 0.6s ease-out',
        'pulse-glow':   'pulseGlow 2s ease-in-out infinite',
        'shimmer':      'shimmer 1.5s infinite',
        'spin-slow':    'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 106, 79, 0.4)' },
          '50%':      { boxShadow: '0 0 30px rgba(45, 106, 79, 0.7)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
