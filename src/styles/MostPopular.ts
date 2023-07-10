import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const MostPopular = styled('section', {
  textAlign: 'center',
  marginTop: 'calc($betweenSections + 40px)',

  '.most-popular__title': {
    color: '$primaryDark',
    fontSize: '3rem',
    fontFamily: '$title',
    fontWeight: '$semiBold',
    marginBottom: '10rem',
  },

  '.dishes': {
    gap: '2rem',
    alignItems: 'center',
  },
});
