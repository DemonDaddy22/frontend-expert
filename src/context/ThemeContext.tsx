import React, { useCallback, useState } from 'react';
import { FELocalStoragePrefix, THEME } from '../constants';

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
    localStorage.setItem(
      `${FELocalStoragePrefix}-theme`,
      JSON.stringify(themeToSet)
    );
  }, [theme]);

  const getThemeValue = useCallback((key: string) => {
      // TODO - get themed value from a constant THEME object
      return '';
    }, [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
