import React from 'react';
import classes from './styles.module.scss';

// TODO - Create question component
// TODO - Create page wrapper component

const ItemCart: React.FC<Props> = () => {
  return (
    <div className={classes.page}>
      <main className={classes.container}>
        <section className={classes.questionContainer}>
          <h2 className={classes.questionTitle}>Item Cart</h2>
          <p className={classes.questionDescription}>Implement an item cart in HTML with the following static data:</p>
          <ul className={classes.questionPoints}>
            <li className={classes.questionPoint}>
              There must be three columns with Item, Price and Quantity as the column headers
            </li>
            <li className={classes.questionPoint}>
              The data for first row must be Banana, $1.00 and 3
            </li>
            <li className={classes.questionPoint}>
              The data for second row must be Burger, $6.90 and 1
            </li>
            <li className={classes.questionPoint}>
              The data for third row must be Cookie, $4.20 and 4
            </li>
            <li className={classes.questionPoint}>
              The data for last row must be Total, $12.10 and 8. Total acts as a row title for the last row.
            </li>
          </ul>
          <p className={classes.questionDescription}>
            Your HTML code should use a table with proper semantic markup and with Item Cart as its caption.
          </p>
        </section>
        <table className={classes.tableContainer}>
          <caption className={classes.tableCaption}>Item Cart</caption>
          <thead>
            <tr className={classes.tableRow}>
              <th className={classes.tableCellHeading}>Item</th>
              <th className={classes.tableCellHeading}>Price</th>
              <th className={classes.tableCellHeading}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.tableRow}>
              <td className={classes.tableCellData}>Banana</td>
              <td className={classes.tableCellData}>$1.00</td>
              <td className={classes.tableCellData}>3</td>
            </tr>
            <tr className={classes.tableRow}>
              <td className={classes.tableCellData}>Burger</td>
              <td className={classes.tableCellData}>$6.90</td>
              <td className={classes.tableCellData}>1</td>
            </tr>
            <tr className={classes.tableRow}>
              <td className={classes.tableCellData}>Cookie</td>
              <td className={classes.tableCellData}>$4.20</td>
              <td className={classes.tableCellData}>4</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className={classes.tableRow}>
              <th className={classes.tableCellHeading}>Total</th>
              <td className={classes.tableCellData}>$12.10</td>
              <td className={classes.tableCellData}>8</td>
            </tr>
          </tfoot>
        </table>
      </main>
    </div>
  );
};

export default ItemCart;
