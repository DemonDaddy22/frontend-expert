import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const CorrespondingNode: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Corresponding Node'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>correspondingNode</span> function that takes in
          three DOM Elements. The first two parameters represent the root nodes of two different DOM trees. The third
          parameter is a node within the first DOM tree.
        </p>
        <p>
          <span className={classes.questionDescriptionHighlight}>tree1</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>tree2</span> have identical structures, meaning that
          every DOM node in <span className={classes.questionDescriptionHighlight}>tree1</span> has the same number of
          children as the corresponding DOM node in <span className={classes.questionDescriptionHighlight}>tree2</span>.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>correspondingNode</span> function should return the
          node in <span className={classes.questionDescriptionHighlight}>tree2</span> that corresponds to{' '}
          <span className={classes.questionDescriptionHighlight}>node1</span> from{' '}
          <span className={classes.questionDescriptionHighlight}>tree1</span>. For simplicity, you can assume these
          trees always have the same structure and thus there is always a corresponding node.
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

export default CorrespondingNode;
