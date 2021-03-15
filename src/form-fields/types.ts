import { FunctionComponent, ReactNode } from 'react';
import { UseFormMethods } from 'react-hook-form';

export type FormField<P> = {
  label: ReactNode | string;
  name: string;
  hasSpace?: boolean;
  borderRadius?: string;
  placeholder: string;
  component: FunctionComponent<P>;
};

export type FormHookMethods = Omit<UseFormMethods, 'handleSubmit'>;

export type FormFieldItemProps = FormField<any> &
  // eslint-disable-next-line no-unused-vars
  FormHookMethods & { noPadding?: boolean; render?: (props: any) => ReactNode; disabled: boolean };

export type FormProps = FormHookMethods & {
  onSubmit: () => void;
  isEditable: boolean;
  disabled: boolean;
  schema: { fields: FormField<any>[] };
};
