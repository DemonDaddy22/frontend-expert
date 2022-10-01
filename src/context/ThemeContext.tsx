import React, { useCallback, useEffect, useState } from 'react';
import { FELocalStoragePrefix, THEME } from '../constants';
import { COLORS, THEME_COLORS } from '../constants/theme';
import { isEmptyString } from '../utils';

const ThemeContextValue: IThemeContextValue = {
  theme: THEME.DARK,
  toggleTheme: () => {},
  getThemeValue: (_: string) => '',
};

const getThemeFromStore = (themeDefaultValue = THEME.DARK) => (
  JSON.parse(localStorage.getItem(`${FELocalStoragePrefix}-theme`) ?? 'null') ?? themeDefaultValue
);

export const ThemeContext = React.createContext(ThemeContextValue);

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | string>(getThemeFromStore);

  const toggleTheme = useCallback(() => {
    const isLightTheme = theme === THEME.LIGHT;
    const themeToSet = isLightTheme ? THEME.DARK : THEME.LIGHT;
    setTheme(themeToSet);
    document.documentElement.setAttribute('theme-mode', themeToSet);
    localStorage.setItem(
      `${FELocalStoragePrefix}-theme`,
      JSON.stringify(themeToSet)
    );
  }, [theme]);

  const getThemeValue = useCallback((key: string) => {
    const themeObject = THEME_COLORS?.[theme as keyof typeof THEME_COLORS];
    return !isEmptyString(themeObject?.[key]) ? themeObject[key] : COLORS.LIGHT;
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('theme-mode', theme);
    localStorage.setItem(
      `${FELocalStoragePrefix}-theme`,
      JSON.stringify(theme)
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
