import { CheckboxField } from '../../form-fields/Checkbox';
// import { TextField } from '../../form-fields/TextField';
import { Box } from '../Box';

const CovidCheckbox = ({ register, name, watch, placeholder }: any) => {
  const field = watch(name);

  const isTested = field === '1';

  return (
    <>
      <CheckboxField
        name={name}
        placeholder={placeholder}
        register={register}
        label="Yes"
        value={1}
        id="tested_covid"
      />
      <Box ml={10}>
        <CheckboxField
          name={name}
          placeholder={placeholder}
          register={register}
          label="No"
          id="non-tested_covid"
          value={0}
        />
      </Box>
      {/* {isTested && <TextField />} */}
    </>
  );
};

export { CovidCheckbox };
