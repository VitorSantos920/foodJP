import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Footer = styled('footer', {
  justifyContent: 'space-around',
  marginTop: '$betweenSections',
  padding: '.5rem',
  gap: '2rem',

  '.footer__col-title': {
    fontSize: '2rem',
    marginBottom: '2rem',
  },

  '.footer__items li': {
    color: '$darkLighter',
    fontFamily: '$text',
    fontSize: '1.125rem',
    marginBottom: '1.5rem',

    '& a:hover': { textDecoration: 'underline' },
  },

  '@medium': {
    alignItems: 'center',
    flexDirection: 'column',
  },
});
