import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const AvaliationContainer = styled('div', {
  background: '#F3F3F3',
  borderRadius: '1rem',
  flex: 1,
  minWidth: 634,
  padding: '2.5rem',
  scrollSnapAlign: 'start',

  '.avaliation__username': {
    color: '$primaryDark',
    fontFamily: '$title',
    fontSize: '2rem',
    fontWeight: '$semiBold',
    margin: '1.5rem 0 1rem',
  },

  '.avaliation__description': {
    color: '$darkLighter',
    fontFamily: '$text',
    fontSize: '1.2rem',
    lineHeight: '160%',
    marginBottom: '1rem',
    width: '60%',
  },

  svg: { marginRight: '.5rem' },

  '@medium': {
    '.avaliation__description': {
      width: '100%',
    },
  },

  '@small': {
    '&': {
      minWidth: 'min-content',
      scrollSnapAlign: 'none',
    },
  },
});
