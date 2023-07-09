import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const HeaderContainer = styled('header', {
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.3rem .5rem',

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

    a: {
      transition: '.4s',

      '&:hover': { color: '$brand' },
    },
  },

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
      transition: '2s',
      width: 0,
      zIndex: -1,
    },

    '&:hover': {
      color: '#fff',

      '&::before': { width: '100%', height: '100%' },
    },
  },
});
