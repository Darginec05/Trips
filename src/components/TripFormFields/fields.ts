import { TextField } from '../../form-fields/TextField';
import { DatePickerField } from '../../form-fields/Datepicker';
import { CountriesSelect } from '../CountriesSelect';
import { CovidCheckbox } from '../CovidCheckbox';

export const TRIP_FORM_FIELDS: any[] = [
  {
    label: 'Where do you want to go',
    name: 'country',
    placeholder: 'Select country',
    hasSpace: false,
    borderRadius: '0',
    component: CountriesSelect,
  },
  {
    label: 'Start date',
    name: 'start_date',
    placeholder: 'yyyy-mm-dd',
    hasSpace: true,
    borderRadius: '0',
    component: DatePickerField,
  },
  {
    label: 'End date',
    name: 'end_date',
    placeholder: 'yyyy-mm-dd',
    hasSpace: false,
    borderRadius: '0',
    component: DatePickerField,
  },
  {
    label: 'Company name',
    name: 'company_name',
    placeholder: 'Type here...',
    hasSpace: true,
    borderRadius: '0',
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
    borderRadius: '0',
    component: TextField,
  },
  {
    label: 'Have you been recently tested for COVID-19?',
    name: 'covid',
    placeholder: 'Type here...',
    hasSpace: true,
    borderRadius: '0',
    component: CovidCheckbox,
  },
];
