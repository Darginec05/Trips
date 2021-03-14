import styled from 'styled-components';
import { StyledProps } from './types';

export const LogoWrap = styled.div<StyledProps>`
  min-width: ${(props) => `${props.width}px`};
  min-height: ${(props) => `${props.height}px`};
  border-radius: 50%;
  border: 2px solid #F1F1F2;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
