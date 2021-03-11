import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: auto;
  padding: 16px 20px;
  border: 1px solid #f1f1f2;
  border-radius: 10px;
  background: #ffffff;

  &:disabled {
    background: #ededed;
    border: 1px solid #dddddf;
  }

  &:focus {
    border: 1px solid #e4e4e5;
  }
`;
