import { createElement } from 'react';
import { Box } from '../../components/Box';
import { Typography } from '../../components/Typography';
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
  ...inputProps
}: any) => {
  // const Component = component;

  const props = {
    watch,
    control,
    register,
    ...inputProps,
  };

  return (
    <FieldWrap p={20} mt={hasSpace ? 23 : 0} fullWidth flexDirection="column" borderRadius={borderRadius}>
      <Typography color="carbon" size="sm">
        {label}
      </Typography>
      <Box mt={20} fullWidth>
        {render ? render(props) : createElement(component, props)}
      </Box>
    </FieldWrap>
  );
};

export { FormFieldItem };
