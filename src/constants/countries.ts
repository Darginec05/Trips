type CountryItem = {
  value: string;
  label: string;
  src: string;
};

export const COUNTRY_MAP: { [x: string]: CountryItem } = {
  aw: {
    value: 'aw',
    label: 'Netherlands',
    src: '/countries/AW.svg',
  },
  gr: {
    value: 'gr',
    label: 'Greece',
    src: '/countries/GR.svg',
  },
  fr: {
    value: 'fr',
    label: 'France',
    src: '/countries/FR.svg',
  },
  pt: {
    value: 'pt',
    label: 'Portugal',
    src: '/countries/PT.svg',
  },
  es: {
    value: 'es',
    label: 'Spain',
    src: '/countries/ES.svg',
  },
  it: {
    value: 'it',
    label: 'Italy',
    src: '/countries/IT.svg',
  },
  sk: {
    value: 'sk',
    label: 'Slovakia',
    src: '/countries/SK.svg',
  },
  se: {
    value: 'se',
    label: 'Sweden',
    src: '/countries/SE.svg',
  },
  cn: {
    value: 'cn',
    label: 'China',
    src: '/countries/CN.svg',
  },
  at: {
    value: 'at',
    label: 'Austria',
    src: '/countries/AT.svg',
  },
  uk: {
    value: 'uk',
    label: 'United Kingdom',
    src: '/countries/GB.svg',
  },
};
