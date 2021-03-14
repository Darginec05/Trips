import styled from 'styled-components';
import { MenuStyleProps } from './types';
// import { ReactComponent as YourTrips } from './icons/your_trips_icon.svg';

export const MenuWrap = styled.nav<MenuStyleProps>`
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

  @media only screen and (max-width: 768px) {
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    transition: transform 250ms ease-in, opacity 150ms ease-in;
    animation: none;
    width: 100%;
    padding: 20px;
    z-index: 2;
  }
`;

export const LogoWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  position: relative;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
    padding: 2px 0 20px 0;
    border-bottom: 1px solid #f1f1f2;
  }
`;

export const SwitchMenuButton = styled.div`
  display: none;
  background: #f1f1f2;
  border-radius: 10px;
  padding: 14px;

  @media only screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

// export const YourTripsIcon = styled(YourTrips)`

// `;
