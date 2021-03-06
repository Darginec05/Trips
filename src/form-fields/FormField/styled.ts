import styled from 'styled-components';
import { Box } from '../../UI/Box';

export const FieldWrap = styled(Box)`
  background: #f9f9fa;
  border-radius: ${(props) => props.borderRadius};
  width: 100%;
  max-width: 768px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const SubmitButton = styled.div`
  width: 200px;
`;
