import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const Flatten: React.FC<Props> = ({ title }) => {
  return (
    <ProjectPage title={title}>
      <QuestionDetails
        title={title}
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>flatten</span> function that takes in a value and returns a flattened version
          of that value.
        </p>
        <p>For the purpose of this problem, a flattened value is defined as follows:</p>
        <ul>
          <li>Primitive values should be left unchanged.</li>
          <li>
            Nested arrays should have their values brought up to the top level array. For example,{' '}
            <span className={classes.questionDescriptionHighlight}>[1, 2, [3, 4, [5, 6]]]</span> would be flattened to{' '}
            <span className={classes.questionDescriptionHighlight}>[1, 2, 3, 4, 5, 6]</span>.
          </li>
          <li>
            Nested objects should have their key-value pairs brought up to the top level object. For example,{' '}
            <span className={classes.questionDescriptionHighlight}>{`{a: 1, b: {c: 2, d: 3, e: {f: 4}}}`}</span> would be flattened to{' '}
            <span className={classes.questionDescriptionHighlight}>{`{a: 1, c: 2, d: 3, f: 4}`}</span>. Note that this means the keys "b" and "e" were
            completely removed, since their values were flattened to the top level. In the event of a key collision (e.g.{' '}
            <span className={classes.questionDescriptionHighlight}>{`{a: 1, b: {a: 2}}`}</span>), any associated value can be used.
          </li>
          <li>
            Arrays nested in objects and objects nested in arrays should be flattened. For example,{' '}
            <span className={classes.questionDescriptionHighlight}>{`{a: [1, 2, [3, 4]]}`}</span> would be flattened to{' '}
            <span className={classes.questionDescriptionHighlight}>{`{a: [1, 2, 3, 4]}`}</span>, and{' '}
            <span className={classes.questionDescriptionHighlight}>[{`{a: 1, b: {c: 2, d: 3}}`}]</span> would be flattened to{' '}
            <span className={classes.questionDescriptionHighlight}>[{`{a: 1, c: 2, d: 3}`}]</span>.
          </li>
        </ul>
        <p>
          For simplicity, you can assume the value as well as any nested values will not be functions. Additionally, you can assume that all object
          keys are strings. Your solution can return a flattened value in place, or it can return a new value, either is acceptable.
        </p>
        <p>
          Your code should not call the native <span className={classes.questionDescriptionHighlight}>Array.prototype.flat()</span> function.
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

export default Flatten;
