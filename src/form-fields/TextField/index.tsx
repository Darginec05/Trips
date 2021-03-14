import { StyledInput } from './styled';

const TextField = ({ name, register, placeholder, type = 'text', error, disabled, onFocus }: any) => {
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
