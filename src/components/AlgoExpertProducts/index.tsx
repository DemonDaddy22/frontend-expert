import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import classes from './styles.module.scss';

const AlgoExpertProducts: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT9.background}>
      <QuestionDetails title='AlgoExpert Products' titleClassName={classes.questionTitle}>
        <p>
          You're given an HTML file containing divs representing AlgoExpert's products. Using only CSS, align the
          products in three rows following these specifications:
        </p>
        <ul>
          <li>
            The first row contains SystemsExpert and MLExpert, in that order.
            <ul>
              <li>
                SystemsExpert has a width of 50% of the width of the container, MLExpert has a width of 30% of the width
                of the container, and all of the remaining horizontal space is between them.
              </li>
              <li>MLExpert has a height of 75px, and SystemsExpert is vertically centered in the row.</li>
            </ul>
          </li>
          <li>
            The second row contains just AlgoExpert, which has a width of 75% of the width of the container and is
            horizontally centered.
          </li>
          <li>
            The third row contains FrontendExpert and ProgrammingExpert, in that order.
            <ul>
              <li>
                FrontendExpert has a width of 40% of the width of the container, and ProgrammingExpert takes up any
                remaining horizontal space, leaving 10px between the two products.
              </li>
              <li>ProgrammingExpert has a height of 75px, and FrontendExpert hugs the bottom of the row.</li>
            </ul>
          </li>
          <li>
            The three rows have 24px of vertical spacing between them. All other styles are either browser-default
            styles or styles from the starting code.
          </li>
        </ul>
      </QuestionDetails>
      <section className={classes.wrapper}>
        <div className={classes.productsContainer}>
          <div className={`${classes.product} ${classes.algoExpert}`}>
            <p>AlgoExpert</p>
          </div>
          <div className={`${classes.product} ${classes.systemsExpert}`}>
            <p>SystemsExpert</p>
          </div>
          <div className={`${classes.product} ${classes.mlExpert}`}>
            <p>MLExpert</p>
          </div>
          <div className={`${classes.product} ${classes.frontendExpert}`}>
            <p>FrontendExpert</p>
          </div>
          <div className={`${classes.product} ${classes.programmingExpert}`}>
            <p>ProgrammingExpert</p>
          </div>
        </div>
      </section>
    </ProjectPage>
  );
};

export default AlgoExpertProducts;
