import styled from 'styled-components';
import { LoaderProps } from './types';

export const LoaderLayout = styled.div<LoaderProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: ${(props) => (props.transparent ? 'transparent' : 'rgba(0,0,0,.2)')};
  left: 0;
  top: 0;
  z-index: 2;
`;

export const LoaderContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  left: calc(50% - 2.5rem);
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLoader = styled.div`
  position: relative;
  .double-pulse {
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    border-radius: 100%;
    background-color: #000;
    opacity: 0.4;
    animation: double-pulse 1.5s infinite ease-out;
    &:nth-of-type(2) {
      animation-delay: -350ms;
    }
  }
  @keyframes double-pulse {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
