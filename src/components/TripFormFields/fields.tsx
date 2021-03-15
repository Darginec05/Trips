import { TextField } from '../../form-fields/TextField';
import { DatePickerField } from '../../form-fields/Datepicker';
import { CountriesSelect } from '../CountriesSelect';
import { CovidCheckbox } from '../CovidCheckbox';
import { FormField } from '../../form-fields/types';

type TripFormField = FormField<any>;

export const TRIP_FORM_FIELDS: TripFormField[] = [
  {
    label: 'Where do you want to go',
    name: 'country',
    placeholder: 'Select country',
    hasSpace: false,
    borderRadius: '10px',
    component: CountriesSelect,
  },
  {
    label: 'Start date',
    name: 'start_date',
    placeholder: 'yyyy-mm-dd',
    hasSpace: true,
    borderRadius: '10px 10px 0 0',
    component: DatePickerField,
  },
  {
    label: 'End date',
    name: 'end_date',
    placeholder: 'yyyy-mm-dd',
    hasSpace: false,
    borderRadius: '0 0 10px 10px',
    component: DatePickerField,
  },
  {
    label: 'Company name',
    name: 'company_name',
    placeholder: 'Type here...',
    hasSpace: true,
    borderRadius: '10px 10px 0 0',
    component: TextField,
  },
  {
    label: 'City',
    name: 'city',
    placeholder: 'Type here...',
    hasSpace: false,
    borderRadius: '0',
    component: TextField,
  },
  {
    label: 'Street',
    name: 'street',
    placeholder: 'Type here...',
    hasSpace: false,
    borderRadius: '0',
    component: TextField,
  },
  {
    label: 'Street number',
    name: 'street_num',
    placeholder: 'Type here...',
    hasSpace: false,
    borderRadius: '0',
    component: TextField,
  },
  {
    label: 'Zip code',
    name: 'zip',
    placeholder: 'Type here...',
    hasSpace: false,
    borderRadius: '0 0 10px 10px',
    component: TextField,
  },
  {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    label: <>Have you been recently tested for <strong>COVID-19?</strong></>,
    name: 'covid',
    placeholder: 'Type here...',
    hasSpace: true,
    borderRadius: '10px',
    component: CovidCheckbox,
  },
];
