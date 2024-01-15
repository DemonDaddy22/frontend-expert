import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode, stockMarketCapsResponse, stockPricesResponse, stockSymbolsResponse } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const TrendingStocks: React.FC<Props> = ({ title }) => {
  return (
    <ProjectPage title={title}>
      <QuestionDetails
        title={title}
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write an asynchronous <span className={classes.questionDescriptionHighlight}>trendingStocks</span> function that takes in a required integer{' '}
          <span className={classes.questionDescriptionHighlight}>n</span> and returns data about the top{' '}
          <span className={classes.questionDescriptionHighlight}>n</span> US-based stocks by market cap.
        </p>
        <p>
          Specifically, the function should return an array containing <span className={classes.questionDescriptionHighlight}>n</span> objects, and
          each object should have 6 own properties: "name", "symbol", "price", "market-cap", "52-week-high", and "52-week-low". These objects should
          contain the data of the top <span className={classes.questionDescriptionHighlight}>n</span> US-based stocks by market-cap.
        </p>
        <p>
          You have been provided 3 different APIs (a symbols API, a prices API, and a market-cap API), each of which returns different stock-related
          data:
        </p>
        <section className={classes.codeBlock}>
          <p className={classes.output}>https://api.frontendexpert.io/api/fe/stock-symbols</p>
        </section>
        <p>
          The symbols API returns a JSON-formatted array of objects, each representing one of the 500 top US-based stocks by market-cap. Each object
          has 2 keys: "name", and "symbol". These symbols are the same symbols used in the prices and market-cap APIs. For example, the return value
          of this API might look like this:
        </p>
        <section className={classes.codeWrapper}>
          <CodeBlock language='json' codeString={stockSymbolsResponse} canCopy={false} />
        </section>
        <section className={classes.codeBlock}>
          <p className={classes.output}>https://api.frontendexpert.io/api/fe/stock-prices</p>
        </section>
        <p>
          The prices API takes one query parameter called <span className={classes.questionDescriptionHighlight}>symbols</span>. This value should be
          a JSON stringified array of requested stock symbols. For example: a request to this API would look like this:
        </p>
        <section className={classes.codeBlock}>
          <p className={classes.output}>https://api.frontendexpert.io/api/fe/stock-prices?symbols=["GOOG"]</p>
        </section>
        <p>
          The prices API returns a JSON formatted array of objects, each representing one of the requested stocks from the query parameter. Each
          object has 4 keys: "52-week-high", "52-week-low", "price", and "symbol". These are the same keys required for the objects in the return
          array, excluding the name and market-cap. For example, the return value of this API might look like this:
        </p>
        <section className={classes.codeWrapper}>
          <CodeBlock language='json' codeString={stockPricesResponse} canCopy={false} />
        </section>
        <section className={classes.codeBlock}>
          <p className={classes.output}>https://api.frontendexpert.io/api/fe/stock-market-caps</p>
        </section>
        <p>
          The market-caps API returns a JSON formatted array of objects, each representing one of the 500 top US-based stocks by market-cap. Each
          object has 2 keys: "market-cap", and "symbol". These symbols are the same symbols as used in the symbols and prices APIs. For example, the
          return value of this API might look like this:
        </p>
        <section className={classes.codeWrapper}>
          <CodeBlock language='json' codeString={stockMarketCapsResponse} canCopy={false} />
        </section>
        <p>
          Your code should minimize daisy-chained fetch requests as much as possible (i.e. if two requests don't depend on each other's responses,
          they should not wait for each other). The parameter <span className={classes.questionDescriptionHighlight}>n</span> will always be positive
          and less than or equal to 500.
        </p>
        <section className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage</h3>
          <CodeBlock codeString={sampleUsage} />
        </section>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} hideCode />
      </section>
    </ProjectPage>
  );
};

export default TrendingStocks;
