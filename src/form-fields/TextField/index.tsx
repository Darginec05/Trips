import { FormFieldItemProps } from '../types';
import { StyledInput } from './styled';

type TextFieldProps = Omit<FormFieldItemProps, 'component' | 'render'> & {
  type: string;
  error: any;
  onFocus: () => void;
};

const TextField = ({ name, register, placeholder, type = 'text', error, disabled, onFocus }: TextFieldProps) => {
  return (
    <StyledInput
      type={type}
      name={name}
      $hasError={!!error}
      ref={register}
      disabled={disabled}
      placeholder={placeholder}
      onFocus={onFocus}
    />
  );
};

export { TextField };
