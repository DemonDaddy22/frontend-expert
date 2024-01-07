import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlock';
import Divider from '../UI/Divider';

const UseLocalStorage: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Use Local Storage'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>useLocalStorage</span> custom hook that takes in a required{' '}
          <span className={classes.questionDescriptionHighlight}>key</span> as a string, and an optional{' '}
          <span className={classes.questionDescriptionHighlight}>initialValue</span>.
        </p>
        <p>
          Calling <span className={classes.questionDescriptionHighlight}>useLocalStorage</span> in a component should save the{' '}
          <span className={classes.questionDescriptionHighlight}>initialValue</span> in localStorage at the given{' '}
          <span className={classes.questionDescriptionHighlight}>key</span> when the component first mounts. If a value already exists at that{' '}
          <span className={classes.questionDescriptionHighlight}>key</span>, the{' '}
          <span className={classes.questionDescriptionHighlight}>initialValue</span> parameter should be ignored.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>useLocalStorage</span> function should return an array with the current value as
          the first element and a setter function as the second element. The setter function should take in a new value as a parameter and update
          localStorage at the original <span className={classes.questionDescriptionHighlight}>key</span>.
        </p>
        <p>When the setter function is called, the component should re-render, just as it would when a standard piece of state is updated.</p>
        <p>
          Any value added to localStorage should first be passed to <span className={classes.questionDescriptionHighlight}>JSON.stringify</span>. When
          reading the value from localStorage, <span className={classes.questionDescriptionHighlight}>JSON.parse</span> should be used to parse the
          original value.
        </p>
        <p>
          For simplicity, you can asssume the <span className={classes.questionDescriptionHighlight}>key</span> parameter will not change between
          renders.
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

export default UseLocalStorage;
