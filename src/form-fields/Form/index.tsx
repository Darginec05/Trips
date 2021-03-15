import { Box } from '../../UI/Box';
import { Button } from '../../UI/Button';
import { Typography } from '../../UI/Typography';
import { FormFieldItem } from '../FormField';
import { FormField, FormProps } from '../types';
import { FormWrapper, SubmitButton } from './styled';

const Form = ({ onSubmit, isEditable, schema, disabled, ...methods }: FormProps) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <Box flexDirection="column" alignItems="center" fullWidth pb={105}>
        {schema.fields.map((fieldProps: FormField<any>) => {
          return (
            <FormFieldItem
              key={fieldProps.name}
              disabled={!isEditable}
              {...methods}
              {...fieldProps}
            />
          );
        })}
      </Box>
      {isEditable && (
        <Box fullWidth justifyContent="center">
          <SubmitButton>
            <Button type="submit" padding="13px 20px" fullWidth justifyContent="space-between" disabled={disabled}>
              <Typography size="sm">Save</Typography>
              <img src="/assets/checkmark.svg" alt="save_icon" />
            </Button>
          </SubmitButton>
        </Box>
      )}
    </FormWrapper>
  );
};

export { Form };
