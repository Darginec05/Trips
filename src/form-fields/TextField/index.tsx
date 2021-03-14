import { StyledInput } from './styled';

const TextField = ({ name, register, placeholder, type = 'text', validation, error }: any) => {
  return (
    <StyledInput type={type} name={name} $hasError={!!error} ref={register(validation)} placeholder={placeholder} />
  );
};

export { TextField };
