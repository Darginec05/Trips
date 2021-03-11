import styled from 'styled-components';
import { ButtonStyleProps } from './types';

// const theme = (key: string) => (prop) => _.get(prop.theme, key) || console.warn('missing key', key);

export const ButtonUI = styled.button<ButtonStyleProps>`
  padding: ${(props) => props.theme.button.padding};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  border-radius: ${(props) => props.theme.button.borderRadius};
  border: none;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  background-color: ${(props) => props.theme.button.bg[props.bgColor!]};
  height: 100%;
`;
