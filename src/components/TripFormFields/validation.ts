import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import * as yup from 'yup';

const formatDate = (date: Date | string) => new Date(date).toLocaleDateString();

const schema = yup.object().shape({
  country: yup
    .object()
    .typeError('Please choose country')
    .shape({
      label: yup.string().required('Required field. Please fill in.'),
      value: yup.string().required('Required field. Please fill in.'),
    }),
  start_date: yup.date().typeError('Must be a valid type: yyyy-mm-dd').required('Required field. Please fill in.'),
  end_date: yup
    .date()
    .typeError('Must be a valid type: yyyy-mm-dd')
    .required('Required field. Please fill in.')
    .min(yup.ref('start_date'), ({ min }) => `Date needs to be after ${formatDate(min)}`),
  company_name: yup.string().required('Required field. Please fill in.'),
  city: yup.string().required('Required field. Please fill in.'),
  street: yup.string().required('Required field. Please fill in.'),
  street_num: yup.string(),
  zip: yup.string().required('Required field. Please fill in.'),
  covid: yup.boolean().required('Required field. Please fill in.'),
  covid_test_date: yup.date().when('covid', {
    is: true,
    then: yup
      .date()
      .typeError('Must be a valid type: yyyy-mm-dd')
      .required('Required field. Please fill in.')
      .test('is before', 'Wrong! The date must be today or before', (value) => dayjs(value).isBefore(dayjs())),
  }),
});

export const resolver = yupResolver(schema);
