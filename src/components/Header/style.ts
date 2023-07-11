import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const HeaderContainer = styled('header', {
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.3rem 0',
  flexWrap: 'wrap',

  '.header__logo': {
    color: '$primaryDark',
    fontFamily: '$title',
    fontSize: '2.5rem',
    fontWeight: '$bold',

    span: { color: '$brand' },
  },

  '.header__menu-items': {
    fontFamily: '$text',
    fontWeight: '$medium',
    gap: '5rem',
    position: 'relative',

    a: {
      transition: '.4s',

      '&:hover': { color: '$brand' },
    },
  },

  img: { display: 'none' },

  '.header__btn': {
    background: 'transparent',
    border: '2px solid $primaryDark',
    borderRadius: '.625rem',
    cursor: 'pointer',
    fontFamily: '$text',
    fontSize: '1.3rem',
    fontWeight: '$semiBold',
    overflow: 'hidden',
    padding: '.625rem 3rem',
    position: 'relative',
    transition: '1s',

    '&::before': {
      backgroundColor: '$brand',
      borderRadius: '.625rem',
      content: '',
      height: 0,
      left: 0,
      position: 'absolute',
      top: 0,
      transition: '1s',
      width: 0,
      zIndex: -1,
    },

    '&:hover': {
      color: '#fff',

      '&::before': { width: '100%', height: '100%' },
    },
  },

  '@xSmall': {
    '.header__menu, > a.close': { display: 'none' },

    '.header__menu.open': {
      display: 'block',
      position: 'absolute',
      top: 70,
      color: '$white',
      right: 0,

      '.header__menu-items': {
        border: '2px solid $brand',
        backgroundColor: '$brand',
        padding: '2rem',
        borderRadius: '.75rem',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '280px',
        gap: '1rem',
        width: '50vw',
        fontSize: '2rem',

        'a:hover': { color: '$white' },
      },
    },

    'a.open': {
      position: 'absolute',
      left: '55vw',
      top: 270,
      zIndex: 2,
      button: {
        color: '$white',

        '&::before': {
          backgroundColor: '$white',
          zIndex: -1,
        },

        '&:hover': { color: '$brand !important' },
      },
    },

    img: {
      display: 'block',
      cursor: 'pointer',
    },
  },
});
