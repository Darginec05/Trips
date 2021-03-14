export type FieldInputProps = {
  name: string;
  placeholder: string;
  defaultValue: string;
  control: any;
};

export type FieldProps = FieldInputProps & {
  hasSpace: boolean;
  label: string;
  borderRadius: string;
  component: any;
};

export type FormFieldsProps = {
  isEditable: boolean;
  defaultValues?: any;
  fields?: any[];
};
