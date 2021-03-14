import { TextField } from '../TextField';

const DatePickerField = ({ register, name, error, disabled }: any) => {
  return <TextField register={register} type="date" disabled={disabled} name={name} error={error} />;
};

export { DatePickerField };
