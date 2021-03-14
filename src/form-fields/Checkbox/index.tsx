import { Typography } from '../../UI/Typography';
import { CheckboxInput, CheckboxLabel } from './styled';

const CheckboxField = ({
  name, id, register, label, checked, value, onChange, disabled,
}: any) => {
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
        disabled={disabled}
      />
      <Typography>{label}</Typography>
    </CheckboxLabel>
  );
};

export { CheckboxField };
