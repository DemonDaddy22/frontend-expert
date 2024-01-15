import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const ArrayMethods: React.FC<Props> = ({ title }) => {
  return (
    <ProjectPage title={title}>
      <QuestionDetails
        title={title}
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Without calling <span className={classes.questionDescriptionHighlight}>Array.prototype.map()</span>,{' '}
          <span className={classes.questionDescriptionHighlight}>Array.prototype.filter()</span>,{' '}
          <span className={classes.questionDescriptionHighlight}>Array.prototype.reduce()</span>, or{' '}
          <span className={classes.questionDescriptionHighlight}>Array.prototype.forEach()</span>, implement the following three similar functions on
          the Array prototype:
        </p>
        <ol>
          <li>
            <span className={classes.questionDescriptionHighlight}>myMap(callback)</span>
            <div className={classes.break} />
            Without mutating the original array, this function should call the passed{' '}
            <span className={classes.questionDescriptionHighlight}>callback</span> function on every element of the array and return a new array
            containing the results of all these calls, in the corresponding order.
            <div className={classes.break} />
            The callback function can take in up to three parameters:
            <ol className={classes.nestedList}>
              <li>The current value in the array.</li>
              <li>The current index in the array.</li>
              <li>The array itself.</li>
            </ol>
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>myFilter(callback)</span>
            <div className={classes.break} />
            Without mutating the original array, this function should call the passed{' '}
            <span className={classes.questionDescriptionHighlight}>callback</span> function on every element of the array and return a new array
            containing the values of the original array that, when passed to the callback function, returned{' '}
            <span className={classes.questionDescriptionHighlight}>true</span>. These values should maintain their original order.
            <div className={classes.break} />
            The callback function takes in the same arguments as the ones that the callback function in{' '}
            <span className={classes.questionDescriptionHighlight}>myMap</span> takes in.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>myReduce(callback, initialValue)</span>
            <div className={classes.break} />
            Without mutating the original array, this function should call the passed{' '}
            <span className={classes.questionDescriptionHighlight}>callback</span> function on every element of the array and return the result of the
            last call to the callback.
            <div className={classes.break} />
            The callback function can take in up to four parameters:
            <ol className={classes.nestedList}>
              <li>
                The accumulator, which is the return value of the previous call to the callback. On the first call to the callback, the accumulator
                should be set to the <span className={classes.questionDescriptionHighlight}>initialValue</span>. If the{' '}
                <span className={classes.questionDescriptionHighlight}>initialValue</span> is{' '}
                <span className={classes.questionDescriptionHighlight}>undefined</span>, then it should be set to the first value of the array, and
                the callback should skip the first element in the array and be called directly on the second element.
              </li>
              <li>The current value in the array.</li>
              <li>The current index in the array.</li>
              <li>The array itself.</li>
            </ol>
            <p>
              If the array contains no elements, the <span className={classes.questionDescriptionHighlight}>initialValue</span> should be returned.
              Note that this differs slightly from the <span className={classes.questionDescriptionHighlight}>Array.prototype.reduce</span> function.
            </p>
          </li>
        </ol>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage</h3>
          <CodeBlock codeString={sampleUsage} />
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Output</h3>
          <section className={classes.codeBlock}>
            <pre className={classes.output}>
              <span className={classes.comment}>{'// Console logs:'}</span>
            </pre>
            <pre className={classes.output}>
              [3, 5, 7]
              <span className={classes.comment}>{' // From my myMap'}</span>
            </pre>
            <pre className={classes.output}>
              [3]
              <span className={classes.comment}>{' // From my myFilter'}</span>
            </pre>
            <pre className={classes.output}>
              18
              <span className={classes.comment}>{' // From my myReduce'}</span>
            </pre>
          </section>
        </div>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} hideCode />
      </section>
    </ProjectPage>
  );
};

export default ArrayMethods;
