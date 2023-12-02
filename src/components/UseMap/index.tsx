import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import { PROJECT_COLORS } from '../../constants/theme';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlock';

const UseMap: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT42.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Use Map'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>useMap</span> custom hook that works as a
          wrapper around the native JavaScript <span className={classes.questionDescriptionHighlight}>Map</span> object.
          The function takes in a single optional{' '}
          <span className={classes.questionDescriptionHighlight}>intialValue</span> parameter, which is passed directly
          to the <span className={classes.questionDescriptionHighlight}>Map</span> constructor during the initial
          render.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>useMap</span> function should create a Map on mount
          and return an object with the following properties:
        </p>
        <ul>
          <li>
            <span className={classes.questionDescriptionHighlight}>map</span>: The underlying Map object.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>set(key, value)</span>: A function to add a new
            key-value pair to the Map or to override the value of an existing key.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>delete(key)</span>: A function to delete a key from
            the Map if it exists.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>clear()</span>: A function to clear out all entries
            from the map.
          </li>
        </ul>
        <p>
          All three of the returned functions (set, delete, and clear) should be static, meaning that the same function
          should be returned on every render for a given usage of{' '}
          <span className={classes.questionDescriptionHighlight}>useMap</span> in a component instance. However, the map
          itself does not need to be static. Calling any of these functions should cause the component instance to
          rerender.
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

export default UseMap;
