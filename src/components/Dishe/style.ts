import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const DisheContainer = styled('div', {
  borderRadius: '2rem',
  background: '#F3F3F3',
  position: 'relative',
  border: '3px solid #f3f3f3',
  height: 455,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '2rem 1.5rem',
  transition: '.2s',

  '@medium': {
    height: 365,
  },

  '&:hover': {
    boxShadow: '0 0 5px 2px gray',

    '& .dishe__title': { textDecoration: 'underline' },
  },

  '.dishe__img': {
    position: 'absolute',
    top: -100,
    alignSelf: 'center',
    height: 292,
  },

  '.dishe__title': {
    color: '$primaryDark',
    fontSize: '2rem',
    fontFamily: '$title',
    fontWeight: '$semiBold',
  },

  '.dishe__description': {
    textAlign: 'center',
    fontFamily: '$text',
    fontSize: '1.2rem',
    color: '$darkLighter',
    lineHeight: '160%',
    margin: '1rem 0 2rem',
  },

  '.dishe__price': {
    color: '$primaryDarker',
    fontSize: '2rem',
    fontWeight: '$medium',
    fontFamily: '$title',
  },

  '@large': {
    '.dishe__img': {
      height: 235,
    },

    '.dishe__title': {
      fontSize: '1.7rem',
    },

    '.dishe__description': {
      fontSize: '1rem',
    },
  },
});
