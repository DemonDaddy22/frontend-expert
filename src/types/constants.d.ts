type Theme = 'LIGHT' | 'DARK';

interface IThemeKeys {
  [key: string]: string;
}

interface ITheme extends IThemeKeys {
  accent1: string;
  accent2: string;
};
