import { TextField } from '../TextField';

const DatePickerField = ({ register, name, error }: any) => {
  return <TextField register={register} type="date" name={name} error={error} />;
};

export { DatePickerField };
