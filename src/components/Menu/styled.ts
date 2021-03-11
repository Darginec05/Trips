import styled from 'styled-components';

export const MenuWrap = styled.aside`
  width: 240px;
  height: 100vh;
  background: #f9f9fa;
  padding: 40px;
  position: fixed;
  left: 0;
  top: 0;
  animation: fromLeft ease-in 300ms;

@keyframes fromLeft {
  0% {
    opacity: 1;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

  @media only screen and (max-width: 600px) {
    transform: translateX(-100%);
    animation: none;
    width: 100%;
    padding: 20px;
  }
`;
