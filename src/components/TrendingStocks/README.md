# Trending Stocks

_Tag_: **JavaScript**

Write an asynchronous `trendingStocks` function that takes in a required integer `n` and returns data about the top `n` US-based stocks by market cap.

Specifically, the function should return an array containing `n` objects, and each object should have 6 own properties: "name", "symbol", "price", "market-cap", "52-week-high", and "52-week-low". These objects should contain the data of the top `n` US-based stocks by market-cap.

You have been provided 3 different APIs (a symbols API, a prices API, and a market-cap API), each of which returns different stock-related data:

```text
https://api.frontendexpert.io/api/fe/stock-symbols
```

The symbols API returns a JSON-formatted array of objects, each representing one of the 500 top US-based stocks by market-cap. Each object has 2 keys: "name", and "symbol". These symbols are the same symbols used in the prices and market-cap APIs. For example, the return value of this API might look like this:

```json
[
  {
    "symbol": "GOOG",
    "name": "Alphabet Inc Class C"
  },
  ...
]
```

```text
https://api.frontendexpert.io/api/fe/stock-prices
```

The prices API takes one query parameter called `symbols`. This value should be a JSON stringified array of requested stock symbols. For example: a request to this API would look like this:

```text
https://api.frontendexpert.io/api/fe/stock-prices?symbols=["GOOG"]
```

The prices API returns a JSON formatted array of objects, each representing one of the requested stocks from the query parameter. Each object has 4 keys: "52-week-high", "52-week-low", "price", and "symbol". These are the same keys required for the objects in the return array, excluding the name and market-cap. For example, the return value of this API might look like this:

```json
[
  {
    "symbol": "GOOG",
    "price": 1001.52,
    "52-week-low": 803.1903,
    "52-week-high": 1186.89,
  },
  ...
]
```

The market-caps API returns a JSON formatted array of objects, each representing one of the 500 top US-based stocks by market-cap. Each object has 2 keys: "market-cap", and "symbol". These symbols are the same symbols as used in the symbols and prices APIs. For example, the return value of this API might look like this:

```json
[
  {
    "symbol": "GOOG",
    "name": 728535558140
  },
  ...
]
```

Your code should minimize daisy-chained fetch requests as much as possible (i.e. if two requests don't depend on each other's responses, they should not wait for each other). The parameter `n` will always be positive and less than or equal to 500.

### Sample Usage

```javascript
await trendingStocks(0); // returns []
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
] */
```
