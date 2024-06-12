/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        secondary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        accent: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        light: '#f7fafc',
        mid: '#cbd5e0',
        dark: '#1f2937',
        'primary-text': '#111827',
        'secondary-text': '#374151',
        'light-text': '#f9fafb',
      },
    },
  },
  plugins: [],
};
