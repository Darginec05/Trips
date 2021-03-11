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

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
