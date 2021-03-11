import styled from 'styled-components';

export const MenuWrap = styled.aside`
  width: 240px;
  height: 100vh;
  background: #f9f9fa;
  padding: 40px;
  position: fixed;
  left: 0;
  top: 0;

  @media only screen and (max-width: 600px) {
    transform: translateX(-100%);
  }
`;
