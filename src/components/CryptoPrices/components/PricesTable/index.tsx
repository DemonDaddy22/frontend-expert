import React, { useCallback, useEffect, useReducer } from 'react';
import classes from './styles.module.scss';
import { CRYPTO_PRICES_CONFIG } from '../../../../constants';
import { isEmptyList } from '../../../../utils';
import Button from '../../../UI/Button';

const ACTION_TYPE: { [key in CryptoPricesActionType]: CryptoPricesActionType } = Object.freeze({
  UPDATE_PAGE: 'UPDATE_PAGE',
  UPDATE_DATA: 'UPDATE_DATA',
  UPDATE_ERROR: 'UPDATE_ERROR',
});

const reducer = (state: ICryptoPricesState, action: ICryptoPricesAction) => {
  const { type, value } = action;

  switch (type) {
    case ACTION_TYPE.UPDATE_PAGE:
      return {
        ...state,
        page: value,
      };
    case ACTION_TYPE.UPDATE_DATA:
      return {
        ...state,
        data: value,
        error: null,
      };
    case ACTION_TYPE.UPDATE_ERROR:
      return {
        ...state,
        error: value,
      };
    default:
      return state;
  }
};

const PricesTable: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, {
    page: 1,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const abort = new AbortController();
      try {
        const res = await fetch(CRYPTO_PRICES_CONFIG.API_URI, {
          mode: 'cors',
          signal: abort.signal,
        });
        const json = (await res.json()) ?? [];
        const pricesData = json.map((item: ICryptoPricesData) => ({
          symbol: item.symbol,
          name: item.name,
          current_price: item.current_price,
          market_cap: item.market_cap,
          high_24h: item.high_24h,
          low_24h: item.low_24h,
          image: item.image,
        }));
        dispatch({ type: ACTION_TYPE.UPDATE_DATA, value: pricesData });
      } catch (err: any) {
        dispatch({ type: ACTION_TYPE.UPDATE_ERROR, value: err?.message ?? 'Something went wrong' });
      }
    };
    fetchData();
  }, []);

  const renderCoinCell = useCallback(
    ({ symbol, name, image }: ICryptoPricesData) => (
      <td className={classes.coinCell}>
        <div className={classes.coinCellContent}>
          <img alt={name} src={image} className={classes.image} />
          <div className={classes.nameContainer}>
            <p className={classes.symbol}>{symbol}</p>
            <p className={classes.name}>{name}</p>
          </div>
        </div>
      </td>
    ),
    []
  );

  const renderPriceCell = useCallback(
    ({ current_price, high_24h, low_24h }: ICryptoPricesData) => (
      <td className={classes.priceCell}>
        <div className={classes.priceCellContent}>
          <p className={classes.price}>{current_price.toFixed(2)}</p>
          <div className={classes.lowHigh}>
            <p className={`${classes.tablet} ${classes.tabletHigh}`}>H: {high_24h.toFixed(2)}</p>
            <p className={`${classes.tablet} ${classes.tabletLow}`}>L: {low_24h.toFixed(2)}</p>
          </div>
        </div>
      </td>
    ),
    []
  );

  const renderMarketCapCell = useCallback(
    ({ market_cap }: ICryptoPricesData) => (
      <td className={classes.capCell}>
        <p className={classes.cap}>{market_cap.toLocaleString()}</p>
      </td>
    ),
    []
  );

  if (state.error) {
    return <h3 className={classes.error}>Something went wrong! Try refreshing the page in some time.</h3>;
  }

  return !isEmptyList(state.data) ? (
    <>
      <table className={classes.table}>
        <caption className={classes.caption}>Crypto Prices</caption>
        <thead>
          <tr className={classes.headerRow}>
            <th className={classes.coinCell}>Coin</th>
            <th className={classes.priceCell}>Price (USD)</th>
            <th className={classes.capCell}>Market Cap (USD)</th>
          </tr>
        </thead>
        <tbody>
          {state.data
            .slice((state.page - 1) * CRYPTO_PRICES_CONFIG.PAGE_SIZE, state.page * CRYPTO_PRICES_CONFIG.PAGE_SIZE)
            .map((item: ICryptoPricesData) => (
              <tr key={item.symbol} className={classes.dataRow}>
                {renderCoinCell(item)}
                {renderPriceCell(item)}
                {renderMarketCapCell(item)}
              </tr>
            ))}
        </tbody>
      </table>
      <div className={classes.buttonsContainer}>
        <Button
          disabled={state.page <= 1}
          onClick={() => dispatch({ type: ACTION_TYPE.UPDATE_PAGE, value: state.page - 1 })}>
          Back
        </Button>
        <Button
          disabled={state.page >= CRYPTO_PRICES_CONFIG.TOTAL_SIZE / CRYPTO_PRICES_CONFIG.PAGE_SIZE}
          onClick={() => dispatch({ type: ACTION_TYPE.UPDATE_PAGE, value: state.page + 1 })}>
          Next
        </Button>
      </div>
    </>
  ) : null;
};

export default PricesTable;
