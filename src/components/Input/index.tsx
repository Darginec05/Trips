import { forwardRef } from 'react';
import { FieldInputProps } from '../InputField/types';
import { StyledInput } from './styled';

const Input = forwardRef<HTMLInputElement, FieldInputProps>((props, ref) => {
  console.log(props);

  return <StyledInput {...props} ref={ref} />;
});

export { Input };
