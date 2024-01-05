import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const DeepEquals: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Deep Equals'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>deepEquals</span> function that takes in two
          required values and returns if those two values are deeply equal to each other.
        </p>
        <p>For the purpose of this problem, deep equality is defined as follows:</p>
        <ul>
          <li>Values with different types are not equal.</li>
          <li>
            <span className={classes.questionDescriptionHighlight}>NaN</span> is only equal to{' '}
            <span className={classes.questionDescriptionHighlight}>NaN</span>.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>null</span> is only equal to{' '}
            <span className={classes.questionDescriptionHighlight}>null</span>, and{' '}
            <span className={classes.questionDescriptionHighlight}>undefined</span> is only equal to{' '}
            <span className={classes.questionDescriptionHighlight}>undefined</span>. These values are not equal to each
            other.
          </li>
          <li>Arrays are only equal if their entries are deeply equal to each other.</li>
          <li>
            Objects are equal only if their keys and values are deeply equal to each other (note that the order of the
            keys doesn't matter).
          </li>
        </ul>
        <p>You can make the following assumptions:</p>
        <ul>
          <li>
            Functions will never be passed to <span className={classes.questionDescriptionHighlight}>deepEquals</span>{' '}
            and will never be contained in objects or arrays passed to{' '}
            <span className={classes.questionDescriptionHighlight}>deepEquals</span>.
          </li>
          <li>Objects will only have string keys, and their values won't be recursive references to themselves.</li>
          <li>The prototype chain doesn't need to be considered when determining if two objects are deeply equal.</li>
        </ul>
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

export default DeepEquals;
