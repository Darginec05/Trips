type CountryItem = {
  value: string;
  label: string;
  src: string;
};

export const COUNTRY_MAP: { [x: string]: CountryItem } = {
  Netherlands: {
    value: 'aw',
    label: 'Netherlands',
    src: '/countries/AW.svg',
  },
  Greece: {
    value: 'gr',
    label: 'Greece',
    src: '/countries/GR.svg',
  },
  France: {
    value: 'fr',
    label: 'France',
    src: '/countries/FR.svg',
  },
  Portugal: {
    value: 'pt',
    label: 'Portugal',
    src: '/countries/PT.svg',
  },
  Spain: {
    value: 'es',
    label: 'Spain',
    src: '/countries/ES.svg',
  },
  Italy: {
    value: 'it',
    label: 'Italy',
    src: '/countries/IT.svg',
  },
  Slovakia: {
    value: 'sk',
    label: 'Slovakia',
    src: '/countries/SK.svg',
  },
  Sweden: {
    value: 'se',
    label: 'Sweden',
    src: '/countries/SE.svg',
  },
  China: {
    value: 'cn',
    label: 'China',
    src: '/countries/CN.svg',
  },
  Austria: {
    value: 'at',
    label: 'Austria',
    src: '/countries/AT.svg',
  },
  'United Kingdom': {
    value: 'uk',
    label: 'United Kingdom',
    src: '/countries/GB.svg',
  },
};
