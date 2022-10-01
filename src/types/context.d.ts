interface IThemeContextValue {
  theme: Theme | string;
  toggleTheme: () => void;
  getThemeValue: (key: string) => string;
}
