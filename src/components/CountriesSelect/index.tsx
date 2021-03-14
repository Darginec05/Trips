import { useEffect, useState } from 'react';
import { components } from 'react-select';
import { COUNTRY_MAP } from '../../constants/countries';
import { SelectField } from '../../form-fields/Select';
import { request } from '../../utils/request';
import { Box } from '../../UI/Box';
import { CountryLogo } from '../CountryLogo';
import { Typography } from '../../UI/Typography';
import { OptionItem } from './styled';

type CountryResponse = {
  value: string;
  label: string;
};

const Control = ({ children, ...props }: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [option] = props.getValue();
  return (
    <components.Control {...props}>
      <Box pl={14} pr={14} fullWidth alignItems="center">
        <CountryLogo country={option?.label} width={23} height={23} />
        {' '}
        <Typography weight={500} size="sm" style={{ marginLeft: 4, display: 'flex', width: '100%' }}>
          {children}
        </Typography>
      </Box>
    </components.Control>
  );
};

const Option = (props: any) => {
  const { innerProps, data, innerRef } = props;
  const { label } = data;

  return (
    <OptionItem p={14} alignItems="center" ref={innerRef} {...innerProps}>
      <CountryLogo country={label} width={23} height={23} />
      <Typography weight={300} size="sm" style={{ marginLeft: 12 }}>
        {label}
      </Typography>
    </OptionItem>
  );
};

const CountriesSelect = ({ control, disabled, name, setValue, getValues, onFocus }: any) => {
  const [countries, setCountries] = useState<CountryResponse[]>([]);

  const getCountry = async () => {
    const _data = await request<CountryResponse[]>({ url: '/country' });
    setCountries(_data);
  };

  useEffect(() => {
    const country = getValues(name);
    if (country) {
      setValue(name, { label: country, value: COUNTRY_MAP[country]?.value });
    }
  }, []);

  useEffect(() => {
    if (countries.length === 0) {
      getCountry();
    }
  }, [countries.length]);

  return (
    <SelectField
      components={{ Option, Control }}
      options={countries}
      instanceId="country_select"
      control={control}
      disabled={disabled}
      name={name}
      isMulti={false}
      onFocus={onFocus}
    />
  );
};

export { CountriesSelect };
