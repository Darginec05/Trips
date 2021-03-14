import styled from 'styled-components';
import { Box as BoxUI } from '../Box';

export const Item = styled(BoxUI)`
  background: #f9f9fa;
  border-radius: 10px;
  transition: background 150ms ease-in;
  height: 88px;

  &:hover {
    background: #f8f8f9;
  }
`;

export const Col = styled(BoxUI)`
  height: 100%;
`;

export const Divider = styled.div`
  height: 100%;
  max-height: 10px;
  width: 1px;
  background-color: #e4e4e5;
  margin: 0 20px;
`;

export const ButtonWrap = styled(BoxUI)`
  margin: 0 0 0 auto;

  button {
    &:first-child {
      margin-right: 20px;
    }
  }
`;
