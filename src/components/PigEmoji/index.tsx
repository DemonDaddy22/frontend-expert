import React from 'react';
import { COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import ColourBlock from '../UI/ColourBlock';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const PigEmoji: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Pig Emoji'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}>
        <p>You're given an HTML file with the markup for a pig emoji.</p>
        <p>Using only CSS, style the HTML to have the appearance of a pig emoji with the following characteristics:</p>
        <ul>
          <li>
            The head should be a perfect circle with a width and height of 200px, a top margin of 20px, and a background
            color of #FFC0CB
            <ColourBlock colour='#FFC0CB' />.
          </li>
          <li>
            The ears should be perfect circles, each with a width and height of 50px. They should be positioned behind
            the head and 10px inwards from the left and right edges of the head, respectively. They should also protrude
            above the head by 10px, and they should have the same background color as the head.
          </li>
          <li>
            The eyes should be perfect circles, each with a width and height of 50px. They should be positioned 40px
            from the top of the head, and 30px from the left and right edges of the head, respectively. They should have
            a background color of white
            <ColourBlock colour={COLORS.WHITE} />.
          </li>
          <li>
            Each eye contains a pupil, which should be half the size of the eye with a border-radius of 50%. The pupils
            should be centered in their respective eye, and they should have a background color of black
            <ColourBlock className={classes.colourBlockBlack} colour={COLORS.BLACK} />.
          </li>
          <li>
            The nose should have a width of 100px and a height of 60px. It should be horizontally centered and
            positioned 30px from the bottom of the head. Additionally, it should have a border radius of 35% and a
            background color of #F57187
            <ColourBlock colour='#F57187' />.
          </li>
          <li>
            The nose contains two nostrils, each with a height that's 50% of the height of the nose and a width that's
            25% of the width of the nose. The nostrils should be vertically centered with horizontal space around them
            (twice as much space between them as from the edge of the nose). Additionally, they should have a border
            radius of 50% and a background color of black
            <ColourBlock className={classes.colourBlockBlack} colour={COLORS.BLACK} />.
          </li>
          <li>
            The head and both ears should each have a solid, black
            <ColourBlock className={classes.colourBlockBlack} colour={COLORS.BLACK} />, 5px border, while the nose and
            both eyes should each have a solid black
            <ColourBlock className={classes.colourBlockBlack} colour={COLORS.BLACK} />, 2px border.
          </li>
        </ul>
      </QuestionDetails>
      <Divider />
      <section className={classes.emojiContainer}>
        <div className={classes.head}>
          <div>
            <div className={classes.ear}></div>
            <div className={classes.ear}></div>
          </div>
          <div>
            <div className={classes.eye}>
              <div className={classes.pupil}></div>
            </div>
            <div className={classes.eye}>
              <div className={classes.pupil}></div>
            </div>
          </div>
          <div className={classes.nose}>
            <div className={classes.nostril}></div>
            <div className={classes.nostril}></div>
          </div>
        </div>
      </section>
    </ProjectPage>
  );
};

export default PigEmoji;
