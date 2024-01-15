import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlock';
import Divider from '../UI/Divider';

const UseWindowSize: React.FC<Props> = ({ title }) => {
  return (
    <ProjectPage title={title}>
      <QuestionDetails
        title={title}
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>useWindowSize</span> custom hook used to track changes to the size of the
          browser window.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>useWindowSize</span> hook should return an object with two properties:
        </p>
        <ul>
          <li>
            <strong>width</strong>: The Current <span className={classes.questionDescriptionHighlight}>innerWidth</span> of the window as a number.
          </li>
          <li>
            <strong>height</strong>: The Current <span className={classes.questionDescriptionHighlight}>innerHeight</span> of the window as a number.
          </li>
        </ul>
        <p>If either of these values changes, the hook should cause the component to re-render with the new values.</p>
        <p>
          In the event of a resize after an instance of a component using the{' '}
          <span className={classes.questionDescriptionHighlight}>useWindowSize</span> hook is unmounted, any created event listeners should be
          removed.
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

export default UseWindowSize;
