/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937', // Dark gray
          light: '#374151',   // Lighter dark gray
          dark: '#111827',    // Almost black
        },
        secondary: {
          DEFAULT: '#4B5563', // Medium gray
          light: '#6B7280',   // Lighter medium gray
          dark: '#374151',    // Darker medium gray
        },
        accent: {
          DEFAULT: '#F59E0B', // Accent highlight (yellow/gold)
          light: '#FBBF24',   // Light yellow
          dark: '#D97706',    // Darker accent color
        },
        neutral: {
          light: '#F3F4F6',   // Light gray background
          DEFAULT: '#E5E7EB', // Neutral light gray
          dark: '#9CA3AF',    // Dark neutral gray
        },
      },
      keyframes: {
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'rotate-y': 'rotateY 2s infinite linear',
      },
      perspective: {
        1000: '1000px',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  plugins: [],
}

