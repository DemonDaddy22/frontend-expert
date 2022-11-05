export const COLORS: { [key: string]: string } = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  LIGHT: '#F4F5F6',
  DARK: '#0D0E0E',
  BLUE1: '#02203C',
};

export const THEME_COLORS: { [key in Theme]: ITheme } = {
  LIGHT: {
    accent1: COLORS.WHITE,
    accent2: COLORS.LIGHT,
  },
  DARK: {
    accent1: COLORS.BLACK,
    accent2: COLORS.DARK,
  },
};

export const PROJECT_COLORS: { [key: string]: { [key: string]: string } } = {
  PROJECT1: {
    background: `linear-gradient(40deg, #1C1019 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT2: {
    background: `linear-gradient(40deg, #121D1E 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT3: {
    background: `linear-gradient(40deg, #13141C 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT4: {
    background: `linear-gradient(40deg, #14140E 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT5: {
    background: `linear-gradient(40deg, #170E1B 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT6: {
    background: `linear-gradient(40deg, #0F1508 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT7: {
    background: `linear-gradient(40deg, #1C0A14 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT8: {
    background: `linear-gradient(40deg, #0B1524 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT9: {
    background: `linear-gradient(40deg, #0D2212 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT10: {
    background: `linear-gradient(40deg, #1A170D 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT11: {
    background: `linear-gradient(40deg, #032423 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT12: {
    background: `linear-gradient(40deg, #110F31 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT13: {
    background: `linear-gradient(40deg, #180F10 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT14: {
    background: `linear-gradient(40deg, #122530 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT15: {
    background: `linear-gradient(40deg, #1E1329 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT16: {
    background: `linear-gradient(40deg, #0A2016 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT17: {
    background: `linear-gradient(40deg, #1E140C 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT18: {
    background: `linear-gradient(40deg, #200512 0%, ${COLORS.BLACK} 100%)`,
  },
  PROJECT19: {
    background: `linear-gradient(40deg, #0D172B 0%, ${COLORS.BLACK} 100%)`,
  },
};
