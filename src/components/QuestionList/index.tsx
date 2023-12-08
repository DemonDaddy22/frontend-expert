import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import { PROJECT_COLORS } from '../../constants/theme';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage } from './codeBlock';
import QuestionSections from './components/QuestionSections';

const QuestionList: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT46.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Question List'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          You're given a CSS file for the FrontendExpert question list, and you need to implement the component using
          React. Although the actual data for questions and submissions would be available in the FrontendExpert API,
          but because of CORS, we'll be using data replicas to implement the exercise.
        </p>
        <p>
          The component should render a fragment containing all of the categories. Each category is a div with a heading
          and one or more question divs. Each category div should have a{' '}
          <span className={classes.questionDescriptionHighlight}>category</span> CSS class, and each question should
          have a <span className={classes.questionDescriptionHighlight}>question</span> CSS class.
        </p>
        <p>
          The category heading is an <span className={classes.questionDescriptionHighlight}>h2</span> with the text of
          the name of the category and how many correct submissions there are for questions in that category (correct
          questions have the <span className={classes.questionDescriptionHighlight}>CORRECT</span> status). For example,
          if 1 out of 5 CSS questions have a "CORRECT" status, the category heading would read{' '}
          <span className={classes.questionDescriptionHighlight}>CSS 1 / 5</span>.
        </p>
        <p>
          The question divs should first contain another div for the status. This status div should have the CSS class
          of <span className={classes.questionDescriptionHighlight}>status</span> and a CSS class based on the current
          status. If the question exists in the submissions API output, that status should be converted to lowercase,
          any <span className={classes.questionDescriptionHighlight}>_</span>'s should be replaced with a{' '}
          <span className={classes.questionDescriptionHighlight}>-</span>, and the resulting string should be used as a
          CSS class. For example, if a submission status is{' '}
          <span className={classes.questionDescriptionHighlight}>PARTIALLY_CORRECT</span>, the complete CSS class of the
          status div would be <span className={classes.questionDescriptionHighlight}>status partially-correct</span>. If
          there is no status in the submissions response, the status class should be{' '}
          <span className={classes.questionDescriptionHighlight}>status unattempted</span>.
        </p>
        <p>
          After the status div, each question should also contain an{' '}
          <span className={classes.questionDescriptionHighlight}>h3</span> with the title of the question.
        </p>
        <p>The complete output of a category might look something like this:</p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleUsage} language='xml' />
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <QuestionSections />
      </section>
    </ProjectPage>
  );
};

export default QuestionList;
