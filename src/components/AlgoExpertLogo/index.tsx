import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import ColourBlock from '../UI/ColourBlock';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';
import { CONTENT_VARIANTS } from '../../constants';

const AlgoExpertLogo: React.FC<Props> = ({ title }) => {
  return (
    <ProjectPage title={title}>
      <QuestionDetails title={title} titleClassName={classes.questionTitle} containerClassName={classes.questionDetailsContainer}>
        <p>
          You're given an HTML file containing the markup for the AlgoExpert logo. Using only CSS, replicate the expected output following these
          specifications:
        </p>
        <ul>
          <li>
            The overall wrapper container has a background color of #02203C
            <ColourBlock colour={COLORS.BLUE1} className={classes.colourBlockBorder} />.
          </li>
          <li>
            The <span className={classes.questionDescriptionHighlight}>.logo</span> div is comprised of 3 parts:
            <ul>
              <li>
                In the center is the inner circle. This is a circle with a width and height of 10px and a solid, white
                <ColourBlock colour={COLORS.WHITE} />, 5px border. The left edge of the inner circle is 50px from the left edge of the{' '}
                <span className={classes.questionDescriptionHighlight}>.wrapper</span>.
              </li>
              <li>
                The first ring has a width of 100px, a height of 30px, and a border-radius of 50%. It also has a solid, white
                <ColourBlock colour={COLORS.WHITE} />, 5px border. This ring is rotated so that the left edge is at the top left, and the right edge
                is at the bottom right.
              </li>
              <li>
                The second ring is the same as the first ring, but it is rotated in the opposite direction (that is the left edge is at the bottom
                left and the right edge is at the top right).
              </li>
            </ul>
          </li>
          <li>
            To the right of the logo is the AlgoExpert text. This text is white
            <ColourBlock colour={COLORS.WHITE} />, with a font-size of 48px and the system default monospace font-family. This text is 50px from the
            right edge of the logo's inner circle.
          </li>
          <li>
            Both the logo and the text are vertically centered in the <span className={classes.questionDescriptionHighlight}>.wrapper</span>{' '}
            container.
          </li>
        </ul>
      </QuestionDetails>
      <Divider />
      <motion.section variants={CONTENT_VARIANTS} className={classes.logoContainer}>
        <div className={classes.wrapper}>
          <div className={classes.logo}></div>
          <h1 className={classes.logoTitle}>AlgoExpert</h1>
        </div>
      </motion.section>
    </ProjectPage>
  );
};

export default AlgoExpertLogo;
