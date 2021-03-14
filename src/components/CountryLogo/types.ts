export type CountryLogoProps = {
  width: number;
  height: number;
  country: string;
};

export type StyledProps = Omit<CountryLogoProps, 'country'> & { src: string };
