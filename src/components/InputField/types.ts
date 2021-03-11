import { ReactNode } from 'react';

export type FieldInputProps = {
  value?: string;
  name: string;
  placeholder: string;
};

export type FieldProps = FieldInputProps & {
  hasSpace: boolean;
  label: string;
  borderRadius: string;
  component: ReactNode;
};

export type FormFieldsProps = {
  buttonText: string;
  isEditable: boolean;
  fields?: FieldProps[];
  defaultValues?: any;
  schema?: any;
};
