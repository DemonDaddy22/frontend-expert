export const THEME: { [key in Theme]: Theme } = Object.freeze({
  LIGHT: 'LIGHT',
  DARK: 'DARK',
});

export const FE_LOCAL_STORAGE_PREFIX: string = 'FEStore';

export const LOREM_IPSUM: Array<string> = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus sit amet est placerat in.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien faucibus et. Volutpat sed cras ornare arcu dui vivamus.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum. Aliquam eleifend mi in nulla posuere sollicitudin. Turpis massa sed elementum tempus.'
];

export const AE_TESTIMONIALS: { [key: string]: any } = {
  API_URI: 'https://api.instantwebtools.net/v1/passenger',
  LIMIT: 10,
};

export const RAPID_MOVIESDB_HOST: string = 'moviesdatabase.p.rapidapi.com';

export const NO_OP: () => void = () => {};
