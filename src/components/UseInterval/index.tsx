import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import { PROJECT_COLORS } from '../../constants/theme';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlock';

const UseInterval: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT40.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Use Interval'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>useInterval</span> custom hook that takes in a
          required <span className={classes.questionDescriptionHighlight}>callback</span> function, and an optional{' '}
          <span className={classes.questionDescriptionHighlight}>delay</span> as a number in milliseconds.
        </p>
        <p>
          Calling <span className={classes.questionDescriptionHighlight}>useInterval</span> with a{' '}
          <span className={classes.questionDescriptionHighlight}>callback</span> and a{' '}
          <span className={classes.questionDescriptionHighlight}>delay</span> should create an interval on mount,
          calling the <span className={classes.questionDescriptionHighlight}>callback</span> function every{' '}
          <span className={classes.questionDescriptionHighlight}>delay</span> milliseconds.
        </p>
        <p>
          If the component unmounts, the interval should be cancelled. If the{' '}
          <span className={classes.questionDescriptionHighlight}>delay</span> changes, the interval should reset, not
          executing the function until the new <span className={classes.questionDescriptionHighlight}>delay</span>{' '}
          completes.
        </p>
        <p>
          If the <span className={classes.questionDescriptionHighlight}>delay</span> is ever set to{' '}
          <span className={classes.questionDescriptionHighlight}>null</span> or{' '}
          <span className={classes.questionDescriptionHighlight}>undefined</span>, the interval should be cancelled.
        </p>
        <p>
          If the <span className={classes.questionDescriptionHighlight}>callback</span> function changes, the interval
          should be updated to call the most recent version of the function. However, this should not reset the
          interval.
        </p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage</h3>
          <CodeBlock codeString={sampleUsage} />
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <CodeBlock language='typescript' codeString={solutionCode} containerClassName={classes.fullHeight} hideCode />
      </section>
    </ProjectPage>
  );
};

export default UseInterval;
