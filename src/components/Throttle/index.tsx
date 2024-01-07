import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { contextExample, sampleUsage1, sampleUsage2, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const Throttle: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Throttle'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>throttle</span> function that takes in a required{' '}
          <span className={classes.questionDescriptionHighlight}>callback</span> function and a required{' '}
          <span className={classes.questionDescriptionHighlight}>delay</span> in milliseconds.
        </p>
        <p>
          Calling <span className={classes.questionDescriptionHighlight}>throttle(callback, delay)</span> should return a new "throttled" version of
          the callback function, which takes in the same parameters as the callback, and which, when executed, should call the callback function a
          maximum of one time per <span className={classes.questionDescriptionHighlight}>delay</span> interval.
        </p>
        <p>
          The first time the throttled function is called, the underlying callback should run immediately. If the throttled function is called again
          before the <span className={classes.questionDescriptionHighlight}>delay</span> has passed, the next call to the underlying callback should
          be scheduled for <span className={classes.questionDescriptionHighlight}>delay</span> milliseconds after the last call to the callback. If
          the throttled function is called multiple times in a <span className={classes.questionDescriptionHighlight}>delay</span> interval, the
          arguments from the last call should be used.
        </p>
        <p>
          For example, repeatedly and continuously calling a throttled function which had a delay of 3000ms would call the underlying callback
          function exactly once every 3 seconds.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>throttle</span> function should also add a{' '}
          <span className={classes.questionDescriptionHighlight}>cancel</span> method to the throttled function (remember, functions are just
          objects). When this method is called, any scheduled callback should be cancelled.
        </p>
        <p>
          Note that the underlying callback functions should have the <span className={classes.questionDescriptionHighlight}>this</span> context of
          the throttled-function callers. For example, in the following code snippet, the underlying callback should be called with the{' '}
          <span className={classes.questionDescriptionHighlight}>this</span> context of the{' '}
          <span className={classes.questionDescriptionHighlight}>object</span>:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={contextExample} />
        </div>
        <p>
          You can assume that the JavaScript timing functions are accurate enough for this question (no need to worry about timeouts not firing at
          exact times). You also don't need to save the return value of the throttled function; it can return{' '}
          <span className={classes.questionDescriptionHighlight}>undefined</span>.
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
      <Divider />
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} hideCode />
      </section>
    </ProjectPage>
  );
};

export default Throttle;
