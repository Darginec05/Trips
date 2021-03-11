import styled from 'styled-components';
import { Button } from '../Button';
import { Box } from '../Box';

export const FieldWrap = styled(Box)`
  background: #f9f9fa;
  border-radius: ${(props) => props.borderRadius};
  width: 500px;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 13px 20px;
  border: 1px solid #F1F1F2;
  border-radius: 10px;
  background: #ffffff;

  &:disabled {
    background: #EDEDED;
    border: 1px solid #DDDDDF;
  }

  &:focus {
    border: 1px solid #E4E4E5;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const SubmitButton = styled(Button)`
  width: 200px;
`;
