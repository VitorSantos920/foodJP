import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const MostPopular = styled('section', {
  textAlign: 'center',
  marginTop: '$betweenSections',

  '.most-popular__title': { marginBottom: '10rem' },

  '.most-popular__dishes': {
    gap: '2rem',
    alignItems: 'center',
  },

  '@medium': {
    '.most-popular__title': { fontSize: '2rem' },

    '.most-popular__dishes': {
      flexDirection: 'column',
      gap: 125,
    },
  },
});
