/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#050505',
          raised: '#0a0a0f',
          card: '#0f0f18',
          border: '#1e1e2e',
        },
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          glow: 'rgba(99, 102, 241, 0.35)',
          cyan: '#22d3ee',
          violet: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spinReverse 20s linear infinite',
        marquee: 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 35s linear infinite',
        'border-flow': 'borderFlow 4s linear infinite',
        'scan-line': 'scanLine 4s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'timeline-fill': 'timelineFill 2s ease-out forwards',
        glitch: 'glitch 5s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        borderFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scanLine: {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(400%)', opacity: '0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        timelineFill: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, -1px)' },
          '98%': { transform: 'translate(1px, 1px)' },
        },
      },
    },
  },
  plugins: [],
};
