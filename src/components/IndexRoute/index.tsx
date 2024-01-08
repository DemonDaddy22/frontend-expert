import React from 'react';
import classes from './styles.module.scss';
import { QUESTIONS_INFO } from '../../constants/questions';
import { Link } from 'react-router-dom';

const IndexRoute: React.FC<Props> = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Hey there! 👋🏼</h1>
      <p>
        The FrontendExpert course takes you through the essential technologies and concepts of the frontend ecosystem. The course can be purchased
        through{' '}
        <Link to='https://www.algoexpert.io/frontend/product' target='_blank' rel='noopener noreferrer'>
          AlgoExpert website
        </Link>
        .
      </p>
      <p>
        Although I had already attempted the exercises on their coding platform, but for the sake of practising further, I thought of creating this
        simple website which is a collection of all the questions and their solutions. You can browse through the list of questions mentioned in the
        sidebar and open up any question to view further details.
      </p>
      <p>
        Some of the questions involve usage of certain APIs to fetch data and implement the solution, but due to CORS, their internal APIs are not
        accessible. I have explored and used some free alternatives here in order to implement the question. I have pointed out the same in such
        questions as well, but just in case I missed out on explicitly mentioning the API endpoints, you can open up the browser's console and head
        over to the network tab for more details.
      </p>
      <p>
        <Link to={`fe/exercise/${QUESTIONS_INFO[0].id}`}>Click here</Link> to dive into the first question or select any question of your choice from
        the sidebar. Happy learning!
      </p>
    </section>
  );
};

export default IndexRoute;
