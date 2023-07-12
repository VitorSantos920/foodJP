import { css } from '@stitches/react';
import { stitches } from '../../stitches.config';

const { styled } = stitches;

const commonTitleStyles = css({
  color: '$primaryDark',
  fontFamily: '$title',
  fontSize: '3rem',
  fontWeight: '$semiBold',
});

export const Title = styled('h1', {
  ...commonTitleStyles,
});

export const Subtitle = styled('h2', {
  ...commonTitleStyles,
});

export const FooterTitle = styled('h5', {
  ...commonTitleStyles,
});
