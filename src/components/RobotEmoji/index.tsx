import React from 'react';
import { COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import ColourBlock from '../UI/ColourBlock';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const RobotEmoji: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Robot Emoji'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
      >
        <p>You're given an HTML file with the markup for a robot head emoji.</p>
        <p>
          Using only CSS, style the HTML to have the appearance of a robot emoji with the following characteristics:
        </p>
        <ul>
          <li>
            The head should be a perfect square with a width and height of 150px, a margin of 50px, and a background
            color of #A4D9EB
            <ColourBlock colour='#A4D9EB' />. The head should also have a solid, #9BBCC2
            <ColourBlock colour='#9BBCC2' />, 5px border and a 20px border-radius.
          </li>
          <li>
            A light should be positioned on top of the head's border. This light should be horizontally centered with
            respect to the head. The bulb should be a perfect circle with a width and height of 30px and a background
            color of #FFA500
            <ColourBlock colour='#FFA500' />. The light's stick should be a rectangle with a width of 10px, a height of
            15px, and a background color of #808080
            <ColourBlock colour='#808080' />. The bulb should be positioned on top of the stick, with 5px of overlap.
          </li>
          <li>
            The ears should each be rectangles with widths of 10px, heights of 50px, and background colors of #C90A0A
            <ColourBlock colour='#C90A0A' />. They should be positioned against the left and right sides of the head's
            border. The left ear should have a top-left and bottom-left border-radius of 5px, and the right ear should
            have a top-right and bottom-right border-radius of 5px. The ears should be vertically centered with respect
            to the head.
          </li>
          <li>
            The eyes should be perfect circles, each with a width and height of 30px. They should be positioned 25px
            from the top of the head (30px from the top of the head's border). There should be 20px of gap between the
            eyes, and they should be horizontally centered in the head. Each eye should have a background color of white
            <ColourBlock colour={COLORS.WHITE} />, and a solid, #00B3FF
            <ColourBlock colour='#00B3FF' />, 5px border.
          </li>
          <li>
            The nose should be a triangle with a color of #C90A0A
            <ColourBlock colour='#C90A0A' />. This triangle should have a width and height of 30px. The triangle should
            be pointed up (i.e. the 30px edge should be parallel to the bottom of the head). The nose should be
            horizontally and vertically centered in the head.
          </li>
          <li>
            The mouth should have a width of 100px, a height of 25px and a background color of #DEDEDE
            <ColourBlock colour='#DEDEDE' />, and a solid, black
            <ColourBlock colour={COLORS.BLACK} className={classes.colourBlockBorder} />, 1px border with a 20px
            border-radius. The mouth should be 25px from the bottom of the head (30px from the bottom of the head's
            border), and it should be horizontally centered.
          </li>
          <li>
            The mouth contains 4 teeth, each of which has a width of a 5px and a background color of black
            <ColourBlock colour={COLORS.BLACK} className={classes.colourBlockBorder} />. These teeth should take up the
            entire height of the mouth without overflowing out of the mouth. There should be even horizontal spacing
            between each tooth, with half as much space before the first tooth and after the last tooth.
          </li>
        </ul>
      </QuestionDetails>
      <Divider />
      <section className={classes.emojiContainer}>
        <div className={classes.head}>
          <div className={classes.light}>
            <div className={classes.bulb}></div>
            <div className={classes.stick}></div>
          </div>
          <div className={classes.ears}>
            <div className={classes.ear}></div>
            <div className={classes.ear}></div>
          </div>
          <div className={classes.eyes}>
            <div className={classes.eye}></div>
            <div className={classes.eye}></div>
          </div>
          <div className={classes.nose}></div>
          <div className={classes.mouth}>
            <div className={classes.tooth}></div>
            <div className={classes.tooth}></div>
            <div className={classes.tooth}></div>
            <div className={classes.tooth}></div>
          </div>
        </div>
      </section>
    </ProjectPage>
  );
};

export default RobotEmoji;
