import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Comments = styled('section', {
  marginTop: '$betweenSections',

  '.avaliations': { gap: '1rem' },

  '@small': {
    textAlign: 'center',

    '.avaliations': { flexDirection: 'column' },
  },
});
