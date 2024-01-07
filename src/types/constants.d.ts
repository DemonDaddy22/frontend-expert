type Theme = 'LIGHT' | 'DARK';

type IThemeKeys = Record<string, string>;

interface ITheme extends IThemeKeys {
  accent1: string;
  accent2: string;
}
