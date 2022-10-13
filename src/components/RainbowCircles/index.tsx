import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import classes from './styles.module.scss';

const RainbowCircles: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT5.background}>
      <QuestionDetails title='Rainbow Circles' titleClassName={classes.questionTitle}>
        <p className={classes.questionDescriptionParagraph}>
          You're given an HTML file with three nested divs, each with a unique ID.
        </p>
        <p className={classes.questionDescriptionParagraph}>
          Using only CSS, style the HTML to have the appearance of six concentric colored circles.
        </p>
        <p className={classes.questionDescriptionParagraph}>
          From outside to inside, the circles should have the following characteristics:
        </p>
        <ul>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              300px by 300px, #ff0000
              <span className={classes.questionPointBox} style={{ backgroundColor: '#ff0000' }}></span>
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              250px by 250px, #ffa500
              <span className={classes.questionPointBox} style={{ backgroundColor: '#ffa500' }}></span>
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              200px by 200px, #ffff00
              <span className={classes.questionPointBox} style={{ backgroundColor: '#fff000' }}></span>
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              150px by 150px, #008000
              <span className={classes.questionPointBox} style={{ backgroundColor: '#008000' }}></span>
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              100px by 100px, #0000ff
              <span className={classes.questionPointBox} style={{ backgroundColor: '#0000ff' }}></span>
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              50px by 50px, #800080
              <span className={classes.questionPointBox} style={{ backgroundColor: '#800080' }}></span>
            </div>
          </li>
        </ul>
        <p className={classes.questionDescriptionParagraph}>
          While there are a variety of ways to achieve this desired output, for the purpose of this problem all colors
          should be achieved using background colors and/or box model properties.
        </p>
      </QuestionDetails>
      <section className={classes.circlesContainer}>
        <div className={classes.outerCircle}>
          <div className={classes.middleCircle}>
            <div className={classes.innerCircle}></div>
          </div>
        </div>
      </section>
    </ProjectPage>
  );
};

export default RainbowCircles;
