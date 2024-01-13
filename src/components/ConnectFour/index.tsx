import React from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage1, sampleUsage2 } from './codeBlock';
import Board from './components/Board';
import Divider from '../UI/Divider';
import { CONTENT_VARIANTS } from '../../constants';

const ConnectFour: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails title='Connect Four' titleClassName={classes.questionTitle} descriptionClassName={classes.questionDescription}>
        <p>You're given a CSS file for a Connect Four game, and you need to implement the component using React.</p>
        <p>
          Connect Four is a simple 2 player game using a board with 7 columns and 6 rows. Each player takes turns, placing one tile at a time. When a
          tile is placed in a column, it must fall down to the lowest possible row visually. The first player to achieve four of their tiles in a row
          (horizontally, vertically or diagonally) wins.
        </p>
        <p>
          When the component first mounts, the board is empty. The board is a div with the class of{' '}
          <span className={classes.questionDescriptionHighlight}>board</span>. Inside of this div, there are 7 other divs, each with the class of{' '}
          <span className={classes.questionDescriptionHighlight}>column</span> to represent one column. Each column then contains 6 divs, each with
          the class of <span className={classes.questionDescriptionHighlight}>tile</span>, one for each row. The first tile should correspond to the
          top row, while the last tile corresponds to the bottom row. This initial output should look like this:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleUsage1} language='xml' />
        </div>
        <p>
          When the board is clicked on, a move is played for the current player, starting with player 1. A tile is placed in the column that was
          clicked on, at the lowest possible row. For example, clicking on the last column of a new board would make a move for player one, taking the
          bottom right tile.
        </p>
        <p>
          When a player claims a tile, that tile has a div nested inside of it with the class of{' '}
          <span className={classes.questionDescriptionHighlight}>player</span> as well as either{' '}
          <span className={classes.questionDescriptionHighlight}>player-1</span> or{' '}
          <span className={classes.questionDescriptionHighlight}>player-2</span>, depending on who claimed the tile. For example, after clicking on
          the last column of a new board, the last tile would look like this:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleUsage2} language='xml' />
        </div>
        <p>
          When a player wins, an <span className={classes.questionDescriptionHighlight}>h1</span> is added above the board with the text of{' '}
          <span className={classes.questionDescriptionHighlight}>Player 1 Wins</span> or{' '}
          <span className={classes.questionDescriptionHighlight}>Player 2 Wins</span>, depending on who won. At this point, the game ends and thus
          clicking on the board should no longer make new moves. If there are no more tiles remaining, then clicking on the board should no longer
          have an effect, but no h1 is displayed.
        </p>
        <p>
          When the game is over (either by a player winning or the board filling up), a button with the text of{' '}
          <span className={classes.questionDescriptionHighlight}>Restart</span> is added below the board. When this button is clicked, the game
          completely resets, allowing for it to be played again.
        </p>
      </QuestionDetails>
      <Divider />
      <motion.section variants={CONTENT_VARIANTS} className={classes.solutionContainer}>
        <Board />
      </motion.section>
    </ProjectPage>
  );
};

export default ConnectFour;
