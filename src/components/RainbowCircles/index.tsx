import React from 'react';
import { motion } from 'framer-motion';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import ColourBlock from '../UI/ColourBlock';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';
import { CONTENT_VARIANTS } from '../../constants';

const RainbowCircles: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails title='Rainbow Circles' titleClassName={classes.questionTitle}>
        <p>You're given an HTML file with three nested divs, each with a unique ID.</p>
        <p>Using only CSS, style the HTML to have the appearance of six concentric colored circles.</p>
        <p>From outside to inside, the circles should have the following characteristics:</p>
        <ul>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              300px by 300px, #ff0000
              <ColourBlock colour='#FF0000' />
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              250px by 250px, #ffa500
              <ColourBlock colour='#FFA500' />
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              200px by 200px, #ffff00
              <ColourBlock colour='#FFFF00' />
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              150px by 150px, #008000
              <ColourBlock colour='#008000' />
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              100px by 100px, #0000ff
              <ColourBlock colour='#0000FF' />
            </div>
          </li>
          <li className={classes.questionPoint}>
            <div className={classes.questionPointWrapper}>
              50px by 50px, #800080
              <ColourBlock colour='#800080' />
            </div>
          </li>
        </ul>
        <p>
          While there are a variety of ways to achieve this desired output, for the purpose of this problem all colors should be achieved using
          background colors and/or box model properties.
        </p>
      </QuestionDetails>
      <Divider />
      <motion.section variants={CONTENT_VARIANTS} className={classes.circlesContainer}>
        <div className={classes.outerCircle}>
          <div className={classes.middleCircle}>
            <div className={classes.innerCircle}></div>
          </div>
        </div>
      </motion.section>
    </ProjectPage>
  );
};

export default RainbowCircles;
