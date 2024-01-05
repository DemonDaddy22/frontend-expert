import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage1, sampleUsage2 } from './codeBlock';
import Board from './components/Board';
import Divider from '../UI/Divider';

const Memory: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Memory'
        titleClassName={classes.questionTitle}
        descriptionClassName={classes.questionDescription}>
        <p>You're given a CSS file for a memory game, and you need to implement the component using React.</p>
        <p>
          When the component first mounts, it should render an{' '}
          <span className={classes.questionDescriptionHighlight}>h1</span> with the text content of{' '}
          <span className={classes.questionDescriptionHighlight}>Memory</span> followed by a{' '}
          <span className={classes.questionDescriptionHighlight}>div</span> with the CSS class of{' '}
          <span className={classes.questionDescriptionHighlight}>board</span>.
        </p>
        <p>
          The board should contain 2 tile divs for each element in the given{' '}
          <span className={classes.questionDescriptionHighlight}>TILE_COLORS</span> array ('red', 'green', 'blue', and
          'yellow'). These tiles should be in a random order, based on a single call to the given{' '}
          <span className={classes.questionDescriptionHighlight}>shuffle</span> function.
        </p>
        <p>
          Each tile div should have the tile class. When a tile is clicked on, it should be considered selected, and it
          should also be given its class from the{' '}
          <span className={classes.questionDescriptionHighlight}>TILE_COLORS</span> array. Clicking on a tile that is
          already selected should have no effect.
        </p>
        <p>
          When two tiles are selected, they should be compared to check for a match. If there is a match, the tiles
          should keep their color class. If there is no match, then after 1 second both tiles should have their color
          classes removed. During this 1 second waiting period, no other tiles should be selectable.
        </p>
        <p>
          Once all of the matches have been found (i.e. every tile has its color class), The{' '}
          <span className={classes.questionDescriptionHighlight}>h1</span> text content should change to{' '}
          <span className={classes.questionDescriptionHighlight}>You Win!</span>. Additionally, a button should appear
          below the board div with the text content of{' '}
          <span className={classes.questionDescriptionHighlight}>Restart</span>. When this button is clicked on, the
          tiles should all be flipped over (the color classes removed), and they should be shuffled into new random
          locations to restart the game. The <span className={classes.questionDescriptionHighlight}>h1</span> text
          content should also return to the initial text content of{' '}
          <span className={classes.questionDescriptionHighlight}>Memory</span>, and the restart button should be removed
          from the page.
        </p>
        <p>The complete HTML output of the memory component might look something like this initially:</p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleUsage1} language='xml' />
        </div>
        <p>After the game completes, that HTML might change to this:</p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleUsage2} language='xml' />
        </div>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <Board />
      </section>
    </ProjectPage>
  );
};

export default Memory;
