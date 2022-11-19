import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';

const PromiseMethods: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT21.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Promise Methods'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Without calling <span className={classes.questionDescriptionHighlight}>Promise.race()</span>,{' '}
          <span className={classes.questionDescriptionHighlight}>Promise.any()</span>,{' '}
          <span className={classes.questionDescriptionHighlight}>Promise.all()</span>,{' '}
          <span className={classes.questionDescriptionHighlight}>Promise.allSettled()</span>, implement the following
          four similar functions on the native <span className={classes.questionDescriptionHighlight}>Promise</span>{' '}
          object:
        </p>
        <ol>
          <li>
            <span className={classes.questionDescriptionHighlight}>myRace(promises)</span>: Takes in an array of
            Promises and returns a new Promise. This new Promise should resolve or reject as soon as any Promise in the
            array resolves or rejects, with the value from that settled Promise.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>myAny(promises)</span>: Takes in an array of Promises
            and returns a new Promise. This new Promise should resolve as soon as any Promise in the array resolves,
            with the value from that resolved Promise. If every Promise in the array rejects, the new Promise should
            reject with the string "all promises rejected".
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>myAll(promises)</span>: Takes in an array of Promises
            and returns a new Promise. This new Promise should resolve as soon as every Promise in the array resolves,
            with an array of the values from those resolved Promises. This array should be in the same order as they
            were passed to <span className={classes.questionDescriptionHighlight}>myAll</span> (not in the order they
            resolved). If any Promise in the array rejects, the new Promise should immediately be rejected with that
            value.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>myAllSettled(promises)</span>: Takes in an array of
            Promises and returns a new Promise. This new Promise should resolve as soon as every Promise in the array
            settles, with an array of objects detailing the results of each Promise. Each of these objects should have a
            "status" key set to either "fulfilled" or "rejected", based on the state of the Promise. If the Promise was
            fulfilled, there should also be a "value" key set to the value from that resolved Promise. If the Promise
            was rejected, there should be an "error" key set to the error the Promise was rejected with. This array
            should be in the same order as they were passed to{' '}
            <span className={classes.questionDescriptionHighlight}>myAllSettled</span> (not in the order they resolved).
          </li>
        </ol>
        <p>For simplicity, you can assume the arrays of Promises passed to these functions will never be empty.</p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage</h3>
          <CodeBlock codeString={sampleUsage} />
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} containerClassName={classes.fullHeight} hideCode />
      </section>
    </ProjectPage>
  );
};

export default PromiseMethods;
