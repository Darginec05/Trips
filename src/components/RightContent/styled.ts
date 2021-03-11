import styled from 'styled-components';

export const Wrap = styled.aside`
  width: 320px;
  height: 100vh;
  background: #fff;
  padding: 43px 40px;
  border-left: 1px solid #F1F1F2;
  position: fixed;
  right: 0;
  top: 0;
  overflow-y: auto;
  animation: fromRight ease-in 300ms;

  @keyframes fromRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
