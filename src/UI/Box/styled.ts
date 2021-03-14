import styled from 'styled-components';
import { BoxMarginProps, BoxPaddingProps, BoxStyleProps } from './types';

const getMargin = ({ m = 0, mt = 0, mr = 0, mb = 0, ml = 0 }: BoxMarginProps): string => {
  if (m) return `${m}px`;

  return `${mt}px ${mr}px ${mb}px ${ml}px`;
};

const getPadding = ({ p = 0, pt = 0, pr = 0, pb = 0, pl = 0 }: BoxPaddingProps): string => {
  if (p) return `${p}px`;

  return `${pt}px ${pr}px ${pb}px ${pl}px`;
};

export const BoxUI = styled.div<BoxStyleProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  margin: ${({ m, mt, mr, mb, ml }) => getMargin({ m, mt, mr, mb, ml })};
  padding: ${({ p, pt, pr, pb, pl }) => getPadding({ p, pt, pr, pb, pl })};
`;
