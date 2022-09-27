type Theme = 'LIGHT' | 'DARK';

interface IThemeKeys {
  [key: string]: string;
}

interface ITheme extends IThemeKeys {
  accentColor1: string;
  accentColor2: string;
};