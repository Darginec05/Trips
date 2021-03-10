import styled from 'styled-components';
import { Box } from '../Box';

export const CountryLogo = styled.div`
  width: 24px;
  height: 24px;
  position: relative;

  img {
    border-radius: 100px;
    object-fit: cover;
  }
`;

export const ItemCard = styled(Box)`
  background: #f9f9fa;
  border-radius: 10px;
  transition: background 150ms ease-in;
  height: 345px;
  width: 100%;

  &:hover {
    background: #f8f8f9;
  }
`;
