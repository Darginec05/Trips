import styled from 'styled-components';
import { Typography } from '../Typography';

export const MainContentUI = styled.main`
  flex-grow: 1;
  height: 100%;
  padding: 43px 360px 43px 280px;
  animation: fadeIn ease 300ms;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(0px, -10px);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const Title = styled(Typography)`
  padding-bottom: 24px;
  border-bottom: 1px solid #f1f1f2;
  width: 100%;
`;
