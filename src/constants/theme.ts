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
    background: `linear-gradient(50deg, #180E15 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT2: {
    background: `linear-gradient(50deg, #111B1C 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT3: {
    background: `linear-gradient(50deg, #13141B 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT4: {
    background: `linear-gradient(50deg, #13130E 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT5: {
    background: `linear-gradient(30deg, #120E14 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT6: {
    background: `linear-gradient(30deg, #0A0E06 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT7: {
    background: `linear-gradient(30deg, #10060C 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT8: {
    background: `linear-gradient(40deg, #0A1422 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT9: {
    background: `linear-gradient(40deg, #0D2212 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT10: {
    background: `linear-gradient(60deg, #12100A 0%, ${COLORS.BLACK} 100%)`,
  },
};
