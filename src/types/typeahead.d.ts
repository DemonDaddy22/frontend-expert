interface TypeAheadResponse {
  _id: string;
  id: string;
  primaryImage: PrimaryImage;
  titleType: TitleType;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
}

interface TitleText {
  text: string;
  __typename: string;
}

interface PrimaryImage {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: Caption;
  __typename: string;
}

interface Caption {
  plainText: string;
  __typename: string;
}

interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: string;
}

interface ReleaseYear {
  year: number;
  endYear: null;
  __typename: string;
}

interface TitleType {
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: Category[];
  canHaveEpisodes: boolean;
  __typename: string;
}

interface Category {
  value: string;
  __typename: string;
}

interface TypeAheadItem {
  id: string;
  title: string;
  type: string;
  image: string;
  releaseDate: ReleaseDate;
}
