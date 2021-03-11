import { useRouter } from 'next/router';
import { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddTripMutation } from '../../features/trip/hooks';
import { TripFormData, TripFormValues } from '../../features/trip/types';
import { Box } from '../Box';
import { Button } from '../Button';
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
  schema?: any;
};

const Fields = ({
  buttonText,
  defaultValues = {},
  isEditable = true,
  schema = { fields: defaultInputFields },
}: FieldsProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const { addTrip } = useAddTripMutation();

  const { register, handleSubmit } = useForm<TripFormValues>({
    defaultValues,
  });

  const onSubmit = async (values: TripFormValues) => {
    try {
      const { zip, street, street_num, city, country, ...tripValues } = values;
      setLoading(true);
      const tripBody: TripFormData = {
        ...tripValues,
        covid: false,
        covid_test_date: '2021-03-11',
        address: {
          zip,
          street,
          city,
          country,
        },
      };
      const data = await addTrip(tripBody);
      setLoading(false);
      router.push('/');
    } catch (_error) {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box flexDirection="column" alignItems="center" fullWidth pb={105}>
        {schema.fields.map((field) => {
          return <InputFieldRender key={field.name} {...field} ref={register} isEditable={isEditable} />;
        })}
      </Box>
      {/* <InputFieldRender
        {...defaultInputFields.country}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.start_date}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.end_date}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.company_name}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.city}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.street}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.street_number}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.zip}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.covid}
        isEditable
      />
      <InputFieldRender
        {...defaultInputFields.covid_test_date}
        isEditable
      /> */}
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
