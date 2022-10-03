import React from 'react';
import classes from './styles.module.scss';

const ItemCart: React.FC<Props> = () => {
  return (
    <div className={classes.page}>
      <main className={classes.container}>
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
