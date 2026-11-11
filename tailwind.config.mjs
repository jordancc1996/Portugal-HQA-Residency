/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F7F8FA',
        },
        'text-primary': '#111111',
        'text-secondary': '#666666',
        'text-muted': '#666666',
        brand: {
          DEFAULT: '#315DA4',
          hover: '#294D89',
          tint: '#EEF3FA',
        },
        cta: {
          // #4A77C1 is 4.47:1 with white. #4673BD is the nearest fill that clears WCAG AA at 4.72:1.
          DEFAULT: '#4673BD',
          hover: '#365FA5',
          active: '#294D89',
          tint: '#F7F8FA',
        },
        border: '#D6D6D6',
        surface: {
          dark: '#1C1917',
        },
      },
      fontFamily: {
        serif: ['Inter', '"Helvetica Neue"', 'sans-serif'],
        sans: ['Inter', '"Helvetica Neue"', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(28, 25, 23, 0.06)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
};
