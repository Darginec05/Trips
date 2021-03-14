import { UseFormMethods } from 'react-hook-form';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { Typography } from '../../components/Typography';
import { FormFieldItem } from '../FormField';
import { FormWrapper, SubmitButton } from './styled';

type FormSchema = {
  fields: any[];
  validation?: any;
};

type FormProps = Omit<UseFormMethods, 'handleSubmit'> & {
  onSubmit: () => void;
  isEditable: boolean;
  disabled: boolean;
  schema: FormSchema;
};

const Form = ({
  onSubmit, isEditable, schema, disabled, register, watch, control, errors,
}: FormProps) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <Box flexDirection="column" alignItems="center" fullWidth pb={105}>
        {schema.fields.map((fieldProps: any) => {
          return (
            <FormFieldItem
              control={control}
              register={register}
              watch={watch}
              key={fieldProps.name}
              disabled={!isEditable}
              error={errors[fieldProps.name]}
              {...fieldProps}
            />
          );
        })}
      </Box>
      {isEditable && (
        <Box fullWidth justifyContent="center">
          <SubmitButton>
            <Button type="submit" padding="20px 13px" fullWidth justifyContent="space-between" disabled={disabled}>
              <Typography>Save</Typography>
              <img src="/assets/checkmark.svg" alt="save_icon" />
            </Button>
          </SubmitButton>
        </Box>
      )}
    </FormWrapper>
  );
};

export { Form };
