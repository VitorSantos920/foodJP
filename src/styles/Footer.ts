import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Footer = styled('footer', {
  justifyContent: 'space-around',
  marginTop: '$betweenSections',
  padding: '.5rem',
  gap: '2rem',

  '.footer__logo': {
    color: '$primaryDark',
    fontFamily: '$title',
    fontSize: '2.5rem',
    fontWeight: '$bold',

    span: { color: '$brand' },
  },

  '.footer__col-title': {
    color: '$primaryDark',
    fontFamily: '$title',
    fontSize: '2rem',
    fontWeight: '$semiBold',
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
