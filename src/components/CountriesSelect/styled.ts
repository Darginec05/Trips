import styled from 'styled-components';
import { Box } from '../Box';

export const CountryIcon = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 12px;

  img {
    border-radius: 100px;
    object-fit: cover;
  border: 2px solid #F1F1F2;
  }
`;

export const OptionItem = styled(Box)`
  border-top: 1px solid #E4E4E5;
  cursor: pointer;

  &:hover {
    background: #F9F9FA;
  }
`;
