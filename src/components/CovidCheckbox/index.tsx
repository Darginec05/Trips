import { useEffect } from 'react';
import { CheckboxField } from '../../form-fields/Checkbox';
// import { TextField } from '../../form-fields/TextField';
import { Box } from '../../UI/Box';

const CovidCheckbox = ({ register, name, watch, placeholder, getValues, setValue, disabled }: any) => {
  const field = watch(name);
  const isTested = field === '1';

  useEffect(() => {
    const covidTest: null | string = getValues(name);
    setValue(name, covidTest === null ? '0' : covidTest);
  }, []);

  return (
    <>
      <CheckboxField
        name={name}
        placeholder={placeholder}
        register={register}
        label="Yes"
        value={1}
        id="tested_covid"
        disabled={disabled}
      />
      <Box ml={10}>
        <CheckboxField
          name={name}
          placeholder={placeholder}
          register={register}
          label="No"
          id="non-tested_covid"
          value={0}
          disabled={disabled}
        />
      </Box>
      {/* {isTested && <TextField />} */}
    </>
  );
};

export { CovidCheckbox };
