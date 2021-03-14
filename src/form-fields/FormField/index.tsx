import { createElement } from 'react';
import { Box } from '../../UI/Box';
import { Typography } from '../../UI/Typography';
import { FieldWrap } from './styled';

const FormFieldItem = ({
  hasSpace,
  label,
  borderRadius,
  component,
  control,
  register,
  watch,
  render,
  error,
  clearErrors,
  name,
  ...inputProps
}: any) => {
  const props = {
    watch,
    control,
    register,
    error,
    name,
    onFocus: () => clearErrors(name),
    ...inputProps,
  };

  const hasError = !!error;

  return (
    <FieldWrap p={20} mt={hasSpace ? 23 : 0} fullWidth flexDirection="column" borderRadius={borderRadius}>
      <Typography color="carbon" size="sm">
        {label}
      </Typography>
      <Box mt={20} fullWidth>
        {render ? render(props) : createElement(component, props)}
      </Box>
      {hasError && (
        <Typography color="error" size="xs" style={{ marginTop: 3 }}>
          {error.message}
        </Typography>
      )}
    </FieldWrap>
  );
};

export { FormFieldItem };
