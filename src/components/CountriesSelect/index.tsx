import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { COUNTRY_MAP } from '../../constants/countries';
import { request } from '../../utils/request';
import { Typography } from '../Typography';
import { CountryIcon, OptionItem } from './styled';

type CountryResponse = {
  value: string;
  label: string;
};

type IsMulti = false;

const styles: StylesConfig<CountryResponse, IsMulti> = {
  container: (provided: any) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: any, state) => ({
    ...provided,
    height: 48,
    borderRadius: state.menuIsOpen ? '10px 10px 0 0' : '10px',
  }),
  menu: (provided) => ({
    ...provided,
    margin: 0,
    borderRadius: '0 0 10px 10px',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
};

const Option = ({ data }: any) => {
  const { label, value } = data;

  const src = COUNTRY_MAP[value].src || '/countries/country_fallback.svg';

  return (
    <OptionItem p={14} alignItems="center">
      <CountryIcon>
        <img src={src} alt={label} width={23} height={23} />
      </CountryIcon>
      <Typography weight={300} size="sm">
        {label}
      </Typography>
    </OptionItem>
  );
};

const CountriesSelect = () => {
  const [countries, setCountries] = useState<CountryResponse[]>([]);

  const getCountry = async () => {
    const _data = await request<CountryResponse[]>({ url: '/country' });
    setCountries(_data);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <Select
      placeholder="Select country"
      styles={styles}
      options={countries}
      components={{ Option }}
      // menuIsOpen
    />
  );
};

export { CountriesSelect };
