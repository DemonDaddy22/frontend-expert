export const COLORS: { [key: string]: string } = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  LIGHT: '#F4F5F6',
  DARK: '#0D0E0E',
};

export const THEME_COLORS: { [key in Theme]: ITheme } = {
  LIGHT: {
    accentColor1: COLORS.WHITE,
    accentColor2: COLORS.LIGHT,
  },
  DARK: {
    accentColor1: COLORS.BLACK,
    accentColor2: COLORS.DARK,
  },
};
