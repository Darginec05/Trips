import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formatDate = (date: Date | string) => new Date(date).toLocaleDateString();

const schema = yup.object().shape({
  country: yup
    .object()
    .typeError('Please choose country')
    .shape({
      label: yup.string().required('Please fill the required field'),
      value: yup.string().required('Please fill the required field'),
    }),
  start_date: yup.date().typeError('Must be a valid type: yyyy-mm-dd').required('Please fill the required field'),
  end_date: yup
    .date()
    .typeError('Must be a valid type: yyyy-mm-dd')
    .required('Please fill the required field')
    .min(yup.ref('start_date'), ({ min }) => `Date needs to be before ${formatDate(min)}`),
  company_name: yup.string().required('Please fill the required field'),
  city: yup.string().required('Please fill the required field'),
  street: yup.string().required('Please fill the required field'),
  street_num: yup.string(),
  zip: yup.string().required('Please fill the required field'),
  covid: yup.boolean().required('Please fill the required field'),
});

export const resolver = yupResolver(schema);
