import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    themes: [
      {
        axa: {
          primary: '#00008f',
          secondary: '#d24723',
          accent: '#cc9900',
          neutral: '#343c3d',
          'base-100': '#ffffff',
          info: '#4976ba',
          success: '#138636',
          warning: '#ffbc11',
          error: '#c91432',
          '--rounded-box': '0rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
};
