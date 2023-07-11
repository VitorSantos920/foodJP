import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Comments = styled('section', {
  marginTop: '$betweenSections',

  '.comments__title': {
    color: '$primaryDark',
    fontFamily: '$title',
    fontSize: '3rem',
    fontWeight: '$semiBold',
    marginBottom: '2rem',
  },

  '.avaliations': { gap: '1rem' },

  '@small': {
    textAlign: 'center',

    '.comments__title': {
      fontSize: '2rem',
    },

    '.avaliations': {
      flexDirection: 'column',
    },
  },
});
