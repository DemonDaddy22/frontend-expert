import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import { QUIZ_CONFIG } from '../../constants';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage } from './codeBlock';
import Questions from './components/Questions';
import Divider from '../UI/Divider';

const Quiz: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Quiz'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>You're given a CSS file for a multiple choice quiz, and you need to implement the component using React.</p>
        <p>When the component initially mounts, it should make an API request to the quiz API at:</p>
        <div className={classes.codeBlock}>{QUIZ_CONFIG.API_URI}</div>
        <p>For more info about the API, visit</p>
        <div className={classes.codeBlock}>https://opentdb.com/api_config.php</div>
        <p>
          Once the request to the API returns, the first quiz question should be displayed. The question should be in an{' '}
          <span className={classes.questionDescriptionHighlight}>h1</span> at the top of the component.
        </p>
        <p>
          Below the question should be the answers, which should each be an <span className={classes.questionDescriptionHighlight}>h2</span> with the
          text content of the answer. Each answer should also have an <span className={classes.questionDescriptionHighlight}>answer</span> class. If
          an answer is clicked on, it should also be given the <span className={classes.questionDescriptionHighlight}>correct</span> or{' '}
          <span className={classes.questionDescriptionHighlight}>incorrect</span> class based on if the answer is the correct answer.
        </p>
        <p>Only one answer should be selectable at a time, and clicking other answers should have no effect until moving on to the next question.</p>
        <p>
          Below the answers should be two buttons with the text of <span className={classes.questionDescriptionHighlight}>Back</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>Next</span> in that order. Both buttons should be initially disabled. The next button
          should only be enabled when an answer has been selected for the current question. When the next button is enabled and clicked on, it should
          change the question to the next question. On the last question, the next button should always be disabled.
        </p>
        <p>
          The back button should be enabled whenever not currently on the first question, even if an answer has not yet been selected. Clicking the
          back button should return to the previous question, but with the previously selected answer already selected.
        </p>
        <p>
          The complete HTML output of the Quiz component might look something like this after "useFetch" has been incorrectly selected on the first
          question:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleUsage} language='xml' />
        </div>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <Questions />
      </section>
    </ProjectPage>
  );
};

export default Quiz;
