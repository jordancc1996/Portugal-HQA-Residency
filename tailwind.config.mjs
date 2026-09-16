/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#FAFAF9',
        },
        'text-primary': '#1C1917',
        'text-secondary': '#57534E',
        'text-muted': '#A8A29E',
        brand: {
          DEFAULT: '#C1453B',
          hover: '#A53A31',
          tint: '#FDF1F0',
        },
        cta: {
          DEFAULT: '#DC2626',
          hover: '#B91C1C',
          tint: '#FEE2E2',
        },
        border: '#E7E5E4',
        surface: {
          dark: '#1C1917',
        },
      },
      fontFamily: {
        // PLACEHOLDER: Playfair Display is a working Google Font. Swap for a licensed editorial serif (Canela, Tiempos, or Freight Display) before launch.
        serif: ['CleanAmpersand', '"Playfair Display"', 'Georgia', 'serif'],
        // PLACEHOLDER: Inter is a working Google Font for body and UI. Swap if the client specifies a licensed sans.
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
