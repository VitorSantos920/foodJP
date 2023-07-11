import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const MostPopular = styled('section', {
  textAlign: 'center',
  marginTop: '$betweenSections',

  '.most-popular__title': {
    color: '$primaryDark',
    fontSize: '3rem',
    fontFamily: '$title',
    fontWeight: '$semiBold',
    marginBottom: '10rem',
  },

  '.most-popular__dishes': {
    gap: '2rem',
    alignItems: 'center',
  },

  '@medium': {
    '.most-popular__title': {
      fontSize: '2rem',
    },

    '.most-popular__dishes': {
      flexDirection: 'column',
      gap: 125,
    },
  },
});
