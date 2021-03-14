import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { TripFormData, TripFormValues } from '../../features/trip/types';
import { Form } from '../../form-fields/Form';
import { Loader } from '../../UI/Loader';
import { Error } from '../Error';
import { TRIP_FORM_FIELDS } from './fields';
import { FormFieldsProps } from './types';
import { resolver } from './validation';

const TripFormFields = ({
  defaultValues = {},
  isEditable = true,
  handler,
  fields = TRIP_FORM_FIELDS,
  isLoading,
  error,
}: FormFieldsProps) => {
  const router = useRouter();
  const { handleSubmit, ...methods } = useForm({
    defaultValues,
    resolver,
  });

  const onSubmit = async (values: TripFormValues) => {
    const { zip, street, street_num, city, covid, country, ...tripValues } = values;
    const tripBody: TripFormData = {
      ...tripValues,
      covid: covid === '1',
      address: {
        zip,
        street,
        city,
        country: country.label,
      },
    };
    await handler(tripBody);
    router.push('/');
  };

  return (
    <>
      {isLoading && <Loader transparent={false} />}
      <Form
        disabled={isLoading}
        schema={{ fields }}
        isEditable={isEditable}
        onSubmit={handleSubmit(onSubmit)}
        {...methods}
      />
      {error && <Error message="Something went wrong" />}
    </>
  );
};

export { TripFormFields };
