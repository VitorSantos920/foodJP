import { createStitches, globalCss } from '@stitches/react';

export const stitches = createStitches({
  theme: {
    colors: {
      brand: '#da2535',
      primaryDark: '#292929',
      darkLighter: '#616161',
      white: '#fbfbfb',
    },

    fonts: {
      title: 'Montserrat, sans-serif',
      text: 'Inter, sans-serif',
    },

    fontWeights: {
      bold: 700,
      semiBold: 600,
      medium: 500,
      normal: 400,
    },

    space: {
      betweenSections: '5.5rem',
    },
  },
  media: {
    large: '(max-width: 998px)',
    medium: '(max-width: 835px)',
    xSmall: '(max-width: 715px)',
    small: '(max-width: 575px)',
  },
});

globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'a, button': {
    fontFamily: 'inherit',
    color: 'inherit',
  },
  a: { textDecoration: 'none' },

  ul: { listStyle: 'none' },

  '.flex': { display: 'flex' },

  '::-webkit-scrollbar': {
    width: 10,
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$brand',
    borderRadius: '.75rem',
  },
})();
