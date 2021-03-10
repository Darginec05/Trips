export type BoxMarginProps = {
  m?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
};

export type BoxPaddingProps = {
  p?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
};

export type BoxProps = BoxMarginProps &
  BoxPaddingProps & {
    children: any;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    fullWidth?: boolean;
  };

export type BoxStyleProps = Omit<BoxProps, 'children'>;
