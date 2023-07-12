import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Logo = styled('a', {
  color: '$primaryDark',
  fontFamily: '$title',
  fontSize: '2.5rem',
  fontWeight: '$bold',

  span: { color: '$brand' },
});
