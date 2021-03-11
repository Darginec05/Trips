import { useRouter } from 'next/router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useAddTripMutation } from '../../features/trip/hooks';
import { TripFormData, TripFormValues } from '../../features/trip/types';
import { Box } from '../Box';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { defaultInputFields } from './fields';
import { FieldWrap, Form, SubmitButton } from './styled';
import { FormFieldsProps, FieldProps } from './types';
import { CountrySelect } from '../../forms-fields/Select';

// const InputFieldRender = forwardRef<HTMLInputElement, FieldProps>(
//   (props, ref) => {
//     const { hasSpace, label, borderRadius, render, ...inputProps } = props;
//     return (
//       <FieldWrap p={20} mt={hasSpace ? 23 : 0} fullWidth flexDirection="column" borderRadius={borderRadius}>
//         <Typography color="carbon" size="sm">
//           {label}
//         </Typography>
//         <Box mt={20} fullWidth>
//           {/* {render ? render({ ...inputProps, ref }) : undefined} */}
//           {/* <Input {...inputProps} ref={ref} /> */}
//         </Box>
//       </FieldWrap>
//     );
//   },
// );
const InputFieldRender = (props: FieldProps & { control: any }) => {
  const { hasSpace, label, borderRadius, component, control, ...inputProps } = props;
  return (
    <FieldWrap p={20} mt={hasSpace ? 23 : 0} fullWidth flexDirection="column" borderRadius={borderRadius}>
      <Typography color="carbon" size="sm">
        {label}
      </Typography>
      <Box mt={20} fullWidth>
        <Controller
          control={control}
          as={component}
          name={inputProps.name}
        />
      </Box>
    </FieldWrap>
  );
};

const Fields = ({
  buttonText,
  defaultValues = {},
  isEditable = true,
  schema = { fields: defaultInputFields },
}: FormFieldsProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { addTrip } = useAddTripMutation();

  const { handleSubmit, control } = useForm<TripFormValues>({
    defaultValues,
  });

  const onSubmit = async (values: TripFormValues) => {
    try {
      const { zip, street, street_num, city, country, ...tripValues } = values;
      setLoading(true);
      const tripBody: TripFormData = {
        ...tripValues,
        covid: false,
        address: {
          zip,
          street,
          city,
          country,
        },
      };
      await addTrip(tripBody);
      setLoading(false);
      router.push('/');
    } catch (_error) {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box flexDirection="column" alignItems="center" fullWidth pb={105}>
        {schema.fields.map((field: any) => {
          return <InputFieldRender key={field.name} {...field} control={control} disabled={!isEditable} />;
        })}
      </Box>
      {isEditable && (
        <Box fullWidth justifyContent="center">
          <SubmitButton>
            <Button type="submit" padding="20px 13px" fullWidth justifyContent="space-between" disabled={isLoading}>
              <Typography>{buttonText}</Typography>
              <img src="/assets/checkmark.svg" alt="save_icon" />
            </Button>
          </SubmitButton>
        </Box>
      )}
    </Form>
  );
};

export { Fields };
