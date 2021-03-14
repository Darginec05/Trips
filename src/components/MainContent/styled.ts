import styled from 'styled-components';
import { Typography } from '../../UI/Typography';
import { SwitchMenuButton } from '../Menu/styled';

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

  @media only screen and (max-width: 768px) {
    padding: 0 20px 20px 20px;
  }
`;

export const Title = styled(Typography)`
  width: 100% !important;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 14px;
    line-height: 19px;
  }
`;

export const TitleWrap = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 24px;
  border-bottom: 1px solid #f1f1f2;
  display: flex;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding: 32px 0;
  }
`;

export const OpenMenu = styled(SwitchMenuButton)`
  @media only screen and (max-width: 768px) {
    top: 50% !important;
    transform: translateY(-50%) !important;
  }
`;
