import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { adder, contextExample, promisifiedAdder, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const Promisify: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Promisify'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>promisify</span> function (similar to the{' '}
          <span className={classes.questionDescriptionHighlight}>util.promisify</span> Node.js function) that takes in a
          required <span className={classes.questionDescriptionHighlight}>callback</span> function and returns a new
          "promisifed" version of that function.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>callback</span> function can take in any number of
          parameters, but its last parameter is guaranteed to be another callback function, which takes in two
          parameters: an error and a value. We'll call this other callback function{' '}
          <span className={classes.questionDescriptionHighlight}>handleErrorAndValue</span> for simplicity.
        </p>
        <p>
          For example, the following <span className={classes.questionDescriptionHighlight}>adder</span> function could
          be passed to the <span className={classes.questionDescriptionHighlight}>promisify</span> function:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={adder} />
        </div>
        <p>
          It adds two values <span className={classes.questionDescriptionHighlight}>x</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>y</span>, and in the case that the result isn't a
          number, it calls the <span className={classes.questionDescriptionHighlight}>handleErrorAndValue</span>{' '}
          function with a new error; otherwise, it passes the summed value as the{' '}
          <span className={classes.questionDescriptionHighlight}>handleErrorAndValue</span> function's second parameter
          with a <span className={classes.questionDescriptionHighlight}>null</span> error.
        </p>
        <p>
          If this <span className={classes.questionDescriptionHighlight}>adder</span> function were passed to the{' '}
          <span className={classes.questionDescriptionHighlight}>promisify</span> function, the resulting promisified
          function would work just like <span className={classes.questionDescriptionHighlight}>adder</span> does, except
          that it would return a new <span className={classes.questionDescriptionHighlight}>Promise</span>. If the{' '}
          <span className={classes.questionDescriptionHighlight}>handleErrorAndValue</span> function were to get called
          with an error, the returned promise would be rejected with that error; otherwise, the returned promise would
          be resolved with the value parameter.
        </p>
        <p>
          Below is an example of the promisified <span className={classes.questionDescriptionHighlight}>adder</span>{' '}
          function in action:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={promisifiedAdder} />
        </div>
        <p>
          To be clear, in order to properly call the main{' '}
          <span className={classes.questionDescriptionHighlight}>callback</span> function (
          <span className={classes.questionDescriptionHighlight}>adder</span>, in the example above), you'll need to
          implement the <span className={classes.questionDescriptionHighlight}>handleErrorAndValue</span> function,
          which will have to be passed to the main{' '}
          <span className={classes.questionDescriptionHighlight}>callback</span> function as its last argument.
        </p>
        <p>
          Also, note that the main callback function should have the{' '}
          <span className={classes.questionDescriptionHighlight}>this</span> context of the promisified function caller.
          For example, in the following code snippet, the{' '}
          <span className={classes.questionDescriptionHighlight}>adder</span> callback should be called with the{' '}
          <span className={classes.questionDescriptionHighlight}>this</span> context of the{' '}
          <span className={classes.questionDescriptionHighlight}>object</span>:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={contextExample} />
        </div>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} hideCode />
      </section>
    </ProjectPage>
  );
};

export default Promisify;
