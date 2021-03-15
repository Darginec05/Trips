import styled from 'styled-components';
import { InputStyleProps } from './types';

export const StyledInput = styled.input<InputStyleProps>`
  width: 100%;
  height: auto;
  padding: 16px 20px;
  border: ${(props) => (props.$hasError ? '1px solid red' : '1px solid #f1f1f2')};
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;
  background: #ffffff;
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;

  &:disabled {
    background: #ededed;
    border: 1px solid #dddddf;
  }

  &:focus {
    border: 1px solid #e4e4e5;
  }
`;
