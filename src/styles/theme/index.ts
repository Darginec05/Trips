export type TypographyColors = {
  primary: string;
  coolgray: string;
  carbon: string;
  gray: string;
  error: string;
};

export type Sizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
};

export type TypographySizes = Sizes
export type TypographyLineHeights = Sizes

export type TypographyTheme = {
  colors: TypographyColors;
  sizes: TypographySizes;
  lineHeight: TypographyLineHeights;
}

export type ButtonBgColors = {
  primary: string;
  coolgray: string;
  red: string;
};

export type ButtonTheme = {
  bg: ButtonBgColors;
  borderRadius: string;
  padding: string;
}

export type ThemeProps = {
  typography: TypographyTheme;
  button: ButtonTheme;
}

export const theme: ThemeProps = {
  typography: {
    colors: {
      primary: '#000',
      coolgray: '#97999B',
      carbon: '#1C252B',
      gray: '#76787B',
      error: 'red',
    },
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 24,
    },
    lineHeight: {
      xs: 16,
      sm: 19,
      md: 21,
      lg: 32,
    },
  },
  button: {
    bg: {
      primary: '#F8D964',
      coolgray: '#F1F1F2',
      red: '#FBEBE9',
    },
    borderRadius: '10px',
    padding: '13px 20px',
  },
};
