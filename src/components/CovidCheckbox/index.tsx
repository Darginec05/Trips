import { useEffect } from 'react';
import { CheckboxField } from '../../form-fields/Checkbox';
import { DatePickerField } from '../../form-fields/Datepicker';
import { FormFieldItem } from '../../form-fields/FormField';
import { Box } from '../../UI/Box';
import { CovidDate, CovidWrap } from './styled';

const CovidCheckbox = ({
  register, name, watch, placeholder, getValues, errors, setValue, disabled, ...rest
}: any) => {
  const field = watch(name);
  const isTested = field === '1';

  useEffect(() => {
    const covidTest: null | string = getValues(name);
    setValue(name, covidTest === null ? '0' : covidTest);
  }, []);

  return (
    <CovidWrap>
      <Box>
        <CheckboxField
          {...rest}
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
            {...rest}
            name={name}
            placeholder={placeholder}
            register={register}
            label="No"
            id="non-tested_covid"
            value={0}
            disabled={disabled}
          />
        </Box>
      </Box>
      {isTested && (
        <CovidDate>
          <FormFieldItem
            noPadding
            label="Date of receiving test results"
            name="covid_test_date"
            placeholder="covid test date"
            register={register}
            errors={errors}
            {...rest}
            render={(props: any) => <DatePickerField {...props} />}
          />
        </CovidDate>
      )}
    </CovidWrap>
  );
};

export { CovidCheckbox };
