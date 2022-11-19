export const stockSymbolsResponse = `[
  {
    "symbol": "GOOG",
    "name": "Alphabet Inc Class C"
  },
  ...
]`;

export const stockMarketCapsResponse = `[
  {
    "symbol": "GOOG",
    "name": 728535558140
  },
  ...
]`;

export const stockPricesResponse = `[
  {
    "symbol": "GOOG",
    "price": 1001.52,
    "52-week-low": 803.1903,
    "52-week-high": 1186.89,
  },
  ...
]`;

export const sampleUsage = `await trendingStocks(0); // returns []
await trendingStocks(2); /* returns [
  {
    "52-week-low": 131.12,
    "52-week-high": 180.1,
    "market-cap": 809508034020,
    "name": "Apple Inc.",
    "price": 155.15,
    "symbol": "AAPL",
  },
  {
    "52-week-low": 824.3,
    "52-week-high": 1198,
    "market-cap": 733823966137,
    "name": "Alphabet Inc Class A",
    "price": 1007.71,
    "symbol": "GOOGL",
  },
] */`;

export const solutionCode = `const SYMBOLS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-symbols';
const MARKET_CAPS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-market-caps';
const PRICES_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-prices';

async function trendingStocks(n) {
  const [stockSymbolsData, stockMarketCapsData] = await Promise.all([getStockSymbols(), getStockMarketCaps()]);
  const sortedMarketCapsData = getSortedData(stockMarketCapsData, sortByMarketCap, n);
  const stockPricesData = await getStockPrices(getSymbols(sortedMarketCapsData));

  const responseData = getStockResponseData(stockSymbolsData, sortedMarketCapsData, stockPricesData);
  return responseData;
}

async function getStockSymbols () {
  const response = await fetch(SYMBOLS_API_BASE_URL);
  return response.json();
}

async function getStockMarketCaps () {
  const response = await fetch(MARKET_CAPS_API_BASE_URL);
  return response.json();
}

async function getStockPrices (symbols) {
  const response = await fetch(\`\${PRICES_API_BASE_URL}?symbols=\${JSON.stringify(symbols)}\`);
  return response.json();
}

function getSortedData (data, condition, n) {
  data.sort(condition);
  return data.slice(0, n);
}

function sortByMarketCap (a, b) {
  return b['market-cap'] - a['market-cap'];
}

function getSymbols (data) {
  return data.map(({ symbol }) => symbol);
}

function getStockResponseData (symbolsData, marketCapsData, pricesData) {
  const responseData = marketCapsData?.map((data) => {
    const symbolData = symbolsData?.find(({ symbol }) => symbol === data.symbol) ?? {};
    const priceData = pricesData?.find(({ symbol }) => symbol === data.symbol) ?? {};

    return {
      ...data,
      ...symbolData,
      ...priceData,
    };
  });

  return responseData;
}`;
