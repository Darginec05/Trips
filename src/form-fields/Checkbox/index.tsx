import { Typography } from '../../UI/Typography';
import { FormFieldItemProps } from '../types';
import { CheckboxInput, CheckboxLabel } from './styled';

type CheckboxProps = Omit<FormFieldItemProps, 'components' | 'render'> & { id: string; value: string | number };

const CheckboxField = ({ name, id, register, label, value, disabled }: CheckboxProps) => {
  return (
    <CheckboxLabel htmlFor={id}>
      <CheckboxInput type="radio" id={id} name={name} value={value} ref={register} disabled={disabled} />
      <Typography>{label}</Typography>
    </CheckboxLabel>
  );
};

export { CheckboxField };
