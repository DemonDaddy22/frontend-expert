import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlock';
import Divider from '../UI/Divider';

const UseStateWithHistory: React.FC<Props> = ({ title }) => {
  return (
    <ProjectPage title={title}>
      <QuestionDetails
        title={title}
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>useStateWithHistory</span> custom hook that takes in an{' '}
          <span className={classes.questionDescriptionHighlight}>initialState</span> value.
        </p>
        <p>
          Calling <span className={classes.questionDescriptionHighlight}>useStateWithHistory</span> should work the same as{' '}
          <span className={classes.questionDescriptionHighlight}>useState</span>, but with an added history with the ability to scroll through
          previous state values.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>useStateWithHistory</span> hook should return an array with five entries in this
          order:
        </p>
        <ol>
          <li>The current value.</li>
          <li>
            A setter function to update the value. This function should take in the new value as a parameter, just like the setter function returned
            by <span className={classes.questionDescriptionHighlight}>useState</span>.
          </li>
          <li>
            A function to "go back" to the previous state value. Calling this function should update the state to the previous value, and it should
            cause a re-render just as setting the state to a new value would. If there is no previous state value, this function should have no
            effect.
          </li>
          <li>
            A function to "go forward" to the next state value. Calling this function should update the state to the next value in the history, and it
            should cause a re-render just as setting the state to a new value would. If there is no next value in the history, this function should
            have no effect.
          </li>
          <li>
            The history of values as an array, initially containing only the initial value. Every time the setter function is called, the new value
            should be appended to the end of the history array.
          </li>
        </ol>
        <p>
          If the setter function is called after having gone backwards to a previous value, the value should be updated to the new value. The new
          value should be appended to the end of the history array as if "go forwards" had been called until reaching the end of the history array
          before setting a new value (see sample usage below).
        </p>
        <p>
          For simplicity, you can assume the <span className={classes.questionDescriptionHighlight}>initialState</span> value and the value passed to
          the setter function will always be primitives.
        </p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage</h3>
          <CodeBlock codeString={sampleUsage} />
        </div>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <CodeBlock language='typescript' codeString={solutionCode} hideCode />
      </section>
    </ProjectPage>
  );
};

export default UseStateWithHistory;
