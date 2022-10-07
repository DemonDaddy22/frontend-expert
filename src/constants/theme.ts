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

export const PROJECT_COLORS: { [key: string]: { [key: string]: string } } = {
  PROJECT1: {
    background: 'linear-gradient(50deg, #051A30 0%, #111012 100%)',
  },
  PROJECT2: {
    background: 'linear-gradient(68.3deg,  rgba(245, 177, 97, 1) 0.4%, rgba(236, 54, 110, 1) 100.2%)',
  },
};
