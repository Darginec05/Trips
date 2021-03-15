import { createElement } from 'react';
import { Box } from '../../UI/Box';
import { Typography } from '../../UI/Typography';
import { FormFieldItemProps } from '../types';
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
  errors,
  name,
  noPadding = false,
  ...rest
}: FormFieldItemProps) => {
  const props = {
    watch,
    control,
    register,
    errors,
    name,
    ...rest,
  };

  const hasError = !!errors[name];

  return (
    <FieldWrap
      p={noPadding ? 0 : 20}
      mt={hasSpace ? 23 : 0}
      fullWidth
      flexDirection="column"
      borderRadius={borderRadius}
    >
      <Typography color="carbon" size="sm">
        {label}
      </Typography>
      <Box mt={20} fullWidth>
        {render ? render(props) : createElement(component, props)}
      </Box>
      {hasError && (
        <Typography color="error" size="xs" style={{ marginTop: 3 }}>
          {errors[name].message}
        </Typography>
      )}
    </FieldWrap>
  );
};

export { FormFieldItem };
