# Crypto Prices

_Tag_: **React**

You're given a CSS file for a component displaying cryptocurrency prices, and you need to implement the component using React.

When the component initially mounts, it should make an API request to the cryptocurrencies API at:

```text
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en
```

For more info about the API, visit

```text
https://www.coingecko.com/api/documentation
```

Your component should return a table, with a caption of "Crypto Prices" and three columns with headings of "Coin", "Price", and "Market Cap". Every coin from the most recent call to the API should be given a row in the table.

Below the table should be two buttons with the text of `Back` and `Next`. The back button should return to the previous page, and the next button should move to the next page. The back button should be disabled on the first page, and the next button should be disabled on the last page.
