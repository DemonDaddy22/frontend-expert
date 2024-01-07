import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import { CRYPTO_PRICES_CONFIG } from '../../constants';
import PricesTable from './components/PricesTable';
import Divider from '../UI/Divider';

const CryptoPrices: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Crypto Prices'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>You're given a CSS file for a component displaying cryptocurrency prices, and you need to implement the component using React.</p>
        <p>When the component initially mounts, it should make an API request to the cryptocurrencies API at:</p>
        <div className={classes.codeBlock}>{CRYPTO_PRICES_CONFIG.API_URI}</div>
        <p>For more info about the API, visit</p>
        <div className={classes.codeBlock}>https://www.coingecko.com/api/documentation</div>
        <p>
          Your component should return a table, with a caption of "Crypto Prices" and three columns with headings of "Coin", "Price", and "Market
          Cap". Every coin from the most recent call to the API should be given a row in the table.
        </p>
        <p>
          Below the table should be two buttons with the text of <span className={classes.questionDescriptionHighlight}>Back</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>Next</span>. The back button should return to the previous page, and the next button
          should move to the next page. The back button should be disabled on the first page, and the next button should be disabled on the last page.
        </p>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <PricesTable />
      </section>
    </ProjectPage>
  );
};

export default CryptoPrices;
