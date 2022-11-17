import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';

const CreateDOM: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT27.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Create DOM'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>createDom</span> function that takes in a
          required root parameter, which is an object representation of a DOM tree's root node or a string
          representation of a text node.
        </p>
        <p>
          If the root parameter is an object, then a DOM Element node is returned. This object will have one required
          property: <span className={classes.questionDescriptionHighlight}>type</span>, which corresponds to the tag
          name of the element being created (e.g. "div"), as well as two optional properties:{' '}
          <span className={classes.questionDescriptionHighlight}>children</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>attributes</span>. If{' '}
          <span className={classes.questionDescriptionHighlight}>children</span> exists, it will be an array of objects
          in the same format as the root parameter. Each value in this array will be a child of the returned node, in
          the order of the array. Additionally, if a child is a string instead of an object, then that string should be
          used as text content. If <span className={classes.questionDescriptionHighlight}>attributes</span> exists, it
          will be an object, with each key corresponding to an attribute name and each value corresponding to an
          attribute value. These attributes are each attributes of the node.
        </p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage</h3>
          <CodeBlock codeString={sampleUsage} />
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} containerClassName={classes.fullHeight} />
      </section>
    </ProjectPage>
  );
};

export default CreateDOM;
