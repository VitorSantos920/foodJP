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
      fontFamily: '$title',
      fontSize: '3rem',
      fontWeight: '$semiBold',
    },

    '.hero__description': {
      color: '$primaryDark',
      fontFamily: '$text',
      fontSize: '1.5rem',
      fontWeight: 'normal',
      margin: '1.5rem 0 3rem',
      maxWidth: 540,
      width: '100%',
    },

    '.hero__btn': {
      backgroundColor: '$brand',
      border: '2px solid $brand',
      borderRadius: '.625rem',
      color: '$white',
      cursor: 'pointer',
      fontFamily: '$text',
      fontSize: '1.5rem',
      maxWidth: 262,
      padding: '1rem 5rem',
      position: 'relative',
      transition: '1s',
      width: '100%',
      zIndex: 1,

      '&::before': {
        backgroundColor: '#fff',
        borderRadius: '.625rem',
        content: '',
        height: '0',
        left: 0,
        position: 'absolute',
        top: 0,
        transition: '1s',
        width: 0,
        zIndex: -1,
      },

      '&:hover': {
        color: '$brand',

        '&::before': { width: '100%', height: '100%' },
      },
    },
  },

  '.hero__img-container': {
    textAlign: 'right',
    width: '40%',

    '.hero__img': { width: '75%' },
  },
});
