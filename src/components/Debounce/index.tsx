import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { contextExample, sampleUsage1, sampleUsage2, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';

const Debounce: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT16.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Debounce'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>debounce</span> function that takes in a
          required <span className={classes.questionDescriptionHighlight}>callback</span> function, a required{' '}
          <span className={classes.questionDescriptionHighlight}>delay</span> in milliseconds, and an optional{' '}
          <span className={classes.questionDescriptionHighlight}>immediate</span> boolean, which defaults to{' '}
          <span className={classes.questionDescriptionHighlight}>false</span>.
        </p>
        <p>
          Calling <span className={classes.questionDescriptionHighlight}>debounce(callback, delay)</span> should return
          a new "debounced" version of the callback function, which takes in the same parameters as the callback, and
          which, when executed, should call the callback after{' '}
          <span className={classes.questionDescriptionHighlight}>delay</span>{' '}
          milliseconds have passed since the last call to this debounced function.
        </p>
        <p>
          For example, repeatedly calling a debounced function which had a delay of 3000ms every second would never call
          the underlying callback function, because the delay of 3000ms would never elapse since the last call.
        </p>
        <p>
          If the <span className={classes.questionDescriptionHighlight}>immediate</span> argument is{' '}
          <span className={classes.questionDescriptionHighlight}>true</span>, then the first call to the debounced
          function should immediately execute the underlying callback function. However, the callback function shouldn't
          be able to execute again until{' '}
          <span className={classes.questionDescriptionHighlight}>delay</span> milliseconds have passed since the last
          call to the debounced function.
        </p>
        <p>
          In this case, repeatedly calling a debounced function which had a delay of 3000ms every second would call the
          underlying callback function once immediately after the first call, and then never again, because the delay of
          3000ms would never elapse since the last call.
        </p>
        <p>
          Note that the underlying callback functions should have the{' '}
          <span className={classes.questionDescriptionHighlight}>this</span> context of the debounced-function callers.
          For example, in the following code snippet, the underlying callback should be called with the{' '}
          <span className={classes.questionDescriptionHighlight}>this</span> context of the{' '}
          <span className={classes.questionDescriptionHighlight}>object</span>:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={contextExample} />
        </div>
        <p>
          You can assume that the JavaScript timing functions are accurate enough for this question (no need to worry
          about timeouts not firing at exact same times).
        </p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage #1</h3>
          <CodeBlock codeString={sampleUsage1} />
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage #2</h3>
          <CodeBlock codeString={sampleUsage2} />
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} containerClassName={classes.fullHeight} />
      </section>
    </ProjectPage>
  );
};

export default Debounce;
