import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Hero = styled('section', {
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '$betweenSections',

  '.hero__content': {
    width: '60%',

    '.hero__title': {
      color: '$primaryDark',
      fontSize: '3rem',
      fontFamily: '$title',
      fontWeight: '$semiBold',
    },

    '.hero__description': {
      color: '$primaryDark',
      fontFamily: '$text',
      fontSize: '1.5rem',
      fontWeight: 'normal',
      margin: '1.5rem 0 3rem',
      width: '100%',
      maxWidth: 540,
    },

    '.hero__btn': {
      backgroundColor: '$brand',
      border: 'none',
      borderRadius: '.625rem',
      color: '$white',
      fontFamily: '$text',
      fontSize: '1.5rem',
      padding: '1rem 5rem',
      width: '100%',
      maxWidth: 262,
    },
  },

  '.hero__img-container': {
    width: '40%',
    textAlign: 'right',

    '.hero__img': { width: '75%' },
  },
});
