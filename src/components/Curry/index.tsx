import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const Curry: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Curry'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>curry</span> function that takes in a required{' '}
          <span className={classes.questionDescriptionHighlight}>callback</span> function and returns a curried version
          of that function. This <span className={classes.questionDescriptionHighlight}>callback</span> function can
          take in any number of arguments, including none at all.
        </p>
        <p>
          If the curried function is called with arguments, it should return a new function, which can be called with
          more arguments, to be passed to the underlying{' '}
          <span className={classes.questionDescriptionHighlight}>callback</span>.
        </p>
        <p>
          If the curried function (or one of the returned new functions) is called with no arguments, this should be
          considered the end of the curried function calls, and the{' '}
          <span className={classes.questionDescriptionHighlight}>callback</span> should be called with every argument
          that was passed, in the correct order.
        </p>
        <p>
          For simplicity, you don't need to worry about binding a{' '}
          <span className={classes.questionDescriptionHighlight}>this</span> context (i.e., you can assume that the{' '}
          <span className={classes.questionDescriptionHighlight}>callback</span> doesn't reference{' '}
          <span className={classes.questionDescriptionHighlight}>this</span>).
        </p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage</h3>
          <CodeBlock codeString={sampleUsage} />
        </div>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} hideCode />
      </section>
    </ProjectPage>
  );
};

export default Curry;
