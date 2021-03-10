import styled from 'styled-components';
import { TypographyStyleProps } from './types';

export const TypographyUI = styled.span<TypographyStyleProps>`
  width: auto;
  color: ${(props) => props.theme.typography.colors[props.color!]};
  font-size: ${(props) => `${props.theme.typography.sizes[props.size!]}px`};
  line-height: ${(props) => `${props.theme.typography.lineHeight[props.size!]}px`};
  letter-spacing: 0;
  word-break: break-word;
  text-decoration: none;
  font-weight: ${(props) => props.weight};
`;
