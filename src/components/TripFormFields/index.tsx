import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddTripMutation } from '../../features/trip/hooks';
import { TripFormData, TripFormValues } from '../../features/trip/types';
import { Form } from '../../form-fields/Form';
import { Loader } from '../../UI/Loader';
import { TRIP_FORM_FIELDS } from './fields';
import { FormFieldsProps } from './types';
import { resolver } from './validation';

const TripFormFields = ({ defaultValues = {}, isEditable = true, fields = TRIP_FORM_FIELDS }: FormFieldsProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { addTrip } = useAddTripMutation();

  const { handleSubmit, ...methods } = useForm({
    defaultValues,
    resolver,
  });

  const onSubmit = async (values: TripFormValues) => {
    try {
      const { zip, street, street_num, city, covid, country, ...tripValues } = values;
      setLoading(true);
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
      await addTrip(tripBody);
      setLoading(false);
      router.push('/');
    } catch (_error) {
      setLoading(false);
    }
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
    </>
  );
};

export { TripFormFields };
