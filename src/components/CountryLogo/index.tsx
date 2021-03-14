import { COUNTRY_MAP } from '../../constants/countries';
import { LogoWrap } from './styled';
import { CountryLogoProps } from './types';

const CountryLogo = ({ width, height, country }: CountryLogoProps) => {
  const src = COUNTRY_MAP[country]?.src || '/countries/country_fallback.svg';

  return <LogoWrap width={width} height={height} src={src} />;
};

export { CountryLogo };
