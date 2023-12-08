import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import { PROJECT_COLORS } from '../../constants/theme';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage1, sampleUsage2 } from './codeBlock';

const Wordle: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT48.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Wordle'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          You're given a CSS file for a clone of the popular game Wordle, and you need to implement the component using
          React.
        </p>
        <p>
          The rules of Wordle are fairly simple. A 5 letter word will be chosen at random, and the player has 6 guesses
          to guess the word. After each guess, the player is told which letters are correct as well as which letters are
          correct but in the wrong position.
        </p>
        <p>
          Although the actual data for words would be available in the FrontendExpert API, but because of CORS, we'll be
          using data replicas to implement the exercise.
        </p>
        <p>
          Once the request to the API returns, a wordle board should be generated. This board contains 6 lines, one for
          each potential guess. Each line contains 5 tiles, one for each character in the guess. The board should be a
          div with the class "board", each line should be a div with the class "line", and each tile should be a div
          with the class "tile". Initially, this HTML should follow this format:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleUsage1} language='xml' />
        </div>
        <p>
          After this initial board is generated, whenever the user types, the characters typed should be added to the
          wordle board in the line for the current guess. Typing a letter beyond 5 letters should have no effect. If the
          user presses "Backspace", a single letter should be removed from the current guess if there is one to be
          removed. If the user presses "Enter", the current guess should be "finalized" if it has 5 letters in it
          (otherwise Enter should have no effect).
        </p>
        <p>
          When a guess is finalized, pressing backspace should no longer delete characters from that guess.
          Additionally, each tile should be given one of three classes:
        </p>
        <ul>
          <li>
            <span className={classes.questionDescriptionHighlight}>correct</span>: If the letter is the same as the
            letter in the solution at the same index.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>close</span>: If the letter is in the solution but
            not at this location.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>incorrect</span>: If the letter is not in the
            solution.
          </li>
        </ul>
        <p>
          If the finalized guess was correct (i.e. the same as the solution), the game should be ended. When the game is
          ended, the board should be left in the same finalized state, and typing should no longer have any effect.
          Additionally, if the last guess is finalized, the game should be ended, regardless of if the guess was
          correct.
        </p>
        <p>
          For simplicity, you can assume the user will only ever type lowercase letters, backspace, or enter.
          Additionally, you do not need to check if guesses are in the word list (i.e. users can guess any combination
          of 5 letters).
        </p>
        <p>
          The complete HTML output of a completed game might look like this after first guessing "hello" then guessing
          the correct answer "world":
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleUsage2} language='xml' />
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <p>Wordle</p>
      </section>
    </ProjectPage>
  );
};

export default Wordle;
