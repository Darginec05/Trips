import { TextField } from '../TextField';

const DatePickerField = ({ register, name, error, disabled, placeholder, ...rest }: any) => {
  return (
    <TextField
      register={register}
      type="date"
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      error={error}
      {...rest}
    />
  );
};

export { DatePickerField };
