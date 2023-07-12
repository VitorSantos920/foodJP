import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const MadeIn = styled('section', {
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '$betweenSections',

  '.made-in__img': { width: '50%' },

  '.made-in__content': {
    width: '40%',

    '.made-in__description': {
      color: '$primaryDark',
      fontFamily: '$text',
      fontSize: '1.5rem',
      fontWeight: 'normal',
      margin: '1.5rem 0 3rem',
    },

    '.made-in__readmore': {
      color: '$brand',
      fontWeight: '$medium',
      fontSize: '1.5rem',
      textDecoration: 'underline',
      fontFamily: '$text',
    },

    '@large': {
      '.made-in__title': { fontSize: '2rem' },

      '.made-in__description, .made-in__readmore': { fontSize: '1rem' },
    },
  },

  '@small': {
    flexDirection: 'column',
    gap: '3rem',

    '.made-in__img': { width: '100%' },

    '.made-in__content': {
      width: '100%',
      textAlign: 'center',
      padding: '0 2rem',
    },
  },
});
