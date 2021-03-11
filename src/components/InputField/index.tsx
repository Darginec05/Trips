import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { TripFormValues } from '../../features/trip/types';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { defaultInputFields } from './fields';
import { FieldWrap, Input, Form, SubmitButton } from './styled';
import { FieldItems } from './types';

type FieldProps = {
  value?: string;
  hasSpace: boolean;
  isEditable: boolean;
  label: string;
  name: string;
  borderRadius: string;
  placeholder: string;
};

const InputFieldRender = forwardRef(
  ({ value, hasSpace, isEditable, label, name, borderRadius, placeholder }: FieldProps, ref) => {
    return (
      <FieldWrap p={20} mt={hasSpace ? 23 : 0} fullWidth flexDirection="column" borderRadius={borderRadius}>
        <Typography color="carbon" size="sm">
          {label}
        </Typography>
        <Box mt={20} fullWidth>
          <Input disabled={!isEditable} name={name} value={value} placeholder={placeholder} ref={ref} />
        </Box>
      </FieldWrap>
    );
  },
);

type FieldsProps = {
  buttonText: string;
  isEditable: boolean;
  fields?: FieldItems[];
  defaultValues?: any;
};

const Fields = ({
  buttonText,
  defaultValues = {},
  fields = defaultInputFields,
  isEditable = true,
}: FieldsProps) => {
  const { register, handleSubmit } = useForm<TripFormValues>({
    defaultValues,
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box flexDirection="column" alignItems="center" fullWidth pb={105}>
        {fields.map((field) => {
          return <InputFieldRender key={field.name} {...field} ref={register} isEditable={isEditable} />;
        })}
      </Box>
      {isEditable && (
        <Box fullWidth justifyContent="center">
          <SubmitButton type="submit" padding="20px 13px">
            <Typography>{buttonText}</Typography>
          </SubmitButton>
        </Box>
      )}
    </Form>
  );
};

export { Fields };
