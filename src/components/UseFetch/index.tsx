import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import Divider from '../UI/Divider';

const UseFetch: React.FC<Props> = ({ title }) => {
  return (
    <ProjectPage title={title}>
      <QuestionDetails
        title={title}
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>useFetch</span> custom hook that takes in a required{' '}
          <span className={classes.questionDescriptionHighlight}>url</span> as a string or URL object. This parameter should be directly passed to the
          native JavaScript <span className={classes.questionDescriptionHighlight}>fetch</span> function.
        </p>
        <p>
          Calling <span className={classes.questionDescriptionHighlight}>useFetch</span> in a component should make a fetch request when an instance
          of the component is mounted. Additionally, a new request should be issued on any render where the{' '}
          <span className={classes.questionDescriptionHighlight}>url</span> has changed.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>useFetch</span> function should return an object with three keys:
        </p>
        <ul>
          <li>
            <strong>responseJSON</strong>: The JSON response from the most recent call to{' '}
            <span className={classes.questionDescriptionHighlight}>fetch</span>. If no response has been received yet or the most recent request
            resulted in an error, this should be null.
          </li>
          <li>
            <strong>isLoading</strong>: When a <span className={classes.questionDescriptionHighlight}>fetch</span> request is issued, this should be
            set to <span className={classes.questionDescriptionHighlight}>true</span>, and set to{' '}
            <span className={classes.questionDescriptionHighlight}>false</span> when the response comes back or an error is thrown.
          </li>
          <li>
            <strong>error</strong>: If the most recent call to <span className={classes.questionDescriptionHighlight}>fetch</span> threw an error or
            retrieving the JSON from the most recent response threw an error, the error should be saved in this value, otherwise it should be null.
          </li>
        </ul>
        <p>
          In the event that the <span className={classes.questionDescriptionHighlight}>url</span> changes before the previous fetch request returns,
          the response from that previous request should not be used in order to prevent a race condition.
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

export default UseFetch;
