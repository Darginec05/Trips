import styled from 'styled-components';
import { Box as BoxUI } from '../Box';

export const Item = styled(BoxUI)`
  background: #f9f9fa;
  border-radius: 10px;
  transition: background 150ms ease-in;

  &:hover {
    background: #f8f8f9;
  }
`;
