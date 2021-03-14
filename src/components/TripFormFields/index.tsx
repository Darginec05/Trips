import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, UseFormMethods } from 'react-hook-form';
import { useAddTripMutation } from '../../features/trip/hooks';
import { TripFormValues } from '../../features/trip/types';
import { Form } from '../../form-fields/Form';
import { TRIP_FORM_FIELDS } from './fields';
import { FormFieldsProps } from './types';

const TripFormFields = ({ defaultValues = {}, isEditable = true, fields = TRIP_FORM_FIELDS }: FormFieldsProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { addTrip } = useAddTripMutation();

  const { handleSubmit, ...methods }: UseFormMethods<TripFormValues> = useForm({
    defaultValues,
  });

  console.log(methods.errors);

  const onSubmit = async (values: TripFormValues) => {
    console.log(values);

    // try {
    //   const { zip, street, street_num, city, country, ...tripValues } = values;
    //   setLoading(true);
    //   const tripBody: TripFormData = {
    //     ...tripValues,
    //     covid: false,
    //     address: {
    //       zip,
    //       street,
    //       city,
    //       country,
    //     },
    //   };
    //   await addTrip(tripBody);
    //   setLoading(false);
    //   router.push('/');
    // } catch (_error) {
    //   setLoading(false);
    // }
  };

  return <Form disabled={isLoading} schema={{ fields }} isEditable={isEditable} onSubmit={handleSubmit(onSubmit)} {...methods} />;
};

export { TripFormFields };
