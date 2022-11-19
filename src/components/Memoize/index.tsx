import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';

const Memoize: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT26.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Memoize'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>memoize</span> function that takes in a
          required <span className={classes.questionDescriptionHighlight}>callback</span> function and an optional{' '}
          <span className={classes.questionDescriptionHighlight}>resolver</span> function. The{' '}
          <span className={classes.questionDescriptionHighlight}>memoize</span> function returns a memoized version of
          the <span className={classes.questionDescriptionHighlight}>callback</span> function, which is defined as
          follows:
        </p>
        <ul>
          <li>
            All of the return values of the memoized function are cached. If the memoized callback is called with an
            existing cache key (defined below), then that cached value is returned without invoking the{' '}
            <span className={classes.questionDescriptionHighlight}>callback</span> again.
          </li>
          <li>
            The cache key is defined based on the optional{' '}
            <span className={classes.questionDescriptionHighlight}>resolver</span> function. If a{' '}
            <span className={classes.questionDescriptionHighlight}>resolver</span> function is not provided, then the
            cache key is the result of passing the memoized function arguments to{' '}
            <span className={classes.questionDescriptionHighlight}>JSON.stringify</span> as an array. If a custom{' '}
            <span className={classes.questionDescriptionHighlight}>resolver</span> function is provided, then the
            arguments should be individually passed to that function instead, and its return value will be the cache key
            (note that this can be of any type).
          </li>
          <li>
            The memoized function should also have three methods:
            <ul>
              <li>
                <span className={classes.questionDescriptionHighlight}>clear()</span>: Clears out the cache.
              </li>
              <li>
                <span className={classes.questionDescriptionHighlight}>delete(...args)</span>: Deletes the cache entry
                corresponding to the passed arguments if one exists.
              </li>
              <li>
                <span className={classes.questionDescriptionHighlight}>has(...args)</span>: Returns a boolean of true if
                the cache has an entry corresponding to the passed arguments, otherwise false.
              </li>
            </ul>
          </li>
        </ul>
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
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} containerClassName={classes.fullHeight} hideCode />
      </section>
    </ProjectPage>
  );
};

export default Memoize;
