type CryptoPricesActionType = 'UPDATE_PAGE' | 'UPDATE_DATA' | 'UPDATE_ERROR';

interface ICryptoPricesData {
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  high_24h: number;
  low_24h: number;
}

interface ICryptoPricesState {
  page: number;
  data: ICryptoPricesData[] | null;
  error: any;
}

interface ICryptoPricesAction {
  type: CryptoPricesActionType;
  value: any;
}
