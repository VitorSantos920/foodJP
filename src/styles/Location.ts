import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Location = styled('section', {
  marginTop: '$betweenSections',

  '.location__title': {
    color: '$primaryDark',
    fontFamily: '$title',
    fontSize: '3rem',
    fontWeight: '$semiBold',
  },

  '.location__img': {
    margin: '2rem 0',
    width: '100%',
  },

  '.location__input-container': {
    justifyContent: 'center',

    label: {
      alignItems: 'center',
      border: '1px solid $primaryDark',
      borderRadius: '.625rem 0 0 .625rem',
      display: 'flex',
      padding: '1rem',
      width: '50%',

      img: { marginRight: '1rem' },

      input: {
        border: 'none',
        flexGrow: 1,
        height: '100%',
        outline: 0,
        width: '100%',

        '&, &::placeholder': {
          color: '$primaryDark',
          fontSize: '1.5rem',
        },
      },
    },

    '.location__btn': {
      backgroundColor: '$brand',
      border: '2px solid $brand',
      borderRadius: '0 .625rem .625rem 0 ',
      color: '$white',
      cursor: 'pointer',
      fontFamily: '$text',
      fontSize: '1.5rem',
      maxWidth: 262,
      padding: '1rem 3rem',

      '&:hover': { filter: 'brightness(90%)' },

      img: {
        display: 'none',
      },
    },
  },
  '@xSmall': {
    '.location__title': {
      fontSize: '2rem',
    },
    '.location__input-container label': {
      width: '100%',
    },

    '.location__input-container .location__btn': {
      padding: '1rem',
      span: { display: 'none' },
      img: { display: 'block' },
    },
  },
});
