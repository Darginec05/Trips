import { Typography } from '../../components/Typography';
import { CheckboxInput, CheckboxLabel } from './styled';

const CheckboxField = ({ name, id, register, label, checked, value, onChange }: any) => {
  return (
    <CheckboxLabel htmlFor={id}>
      <CheckboxInput
        type="radio"
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
        ref={register}
      />
      <Typography>{label}</Typography>
    </CheckboxLabel>
  );
};

export { CheckboxField };
