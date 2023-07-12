import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Comments = styled('section', {
  marginTop: '$betweenSections',

  '.avaliations': {
    gap: '1rem',
    overflowX: 'scroll',
    scrollSnapType: 'x mandatory',
  },

  '@small': {
    textAlign: 'center',

    '.avaliations': { flexDirection: 'column' },
  },
});
