import styled from 'styled-components';
import { ContainerStyleProps } from './types';

export const ContainerUI = styled.div<ContainerStyleProps>`
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
`;
