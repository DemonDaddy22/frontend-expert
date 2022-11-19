import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';

const ThisBinding: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT17.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='This Binding'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          Without calling <span className={classes.questionDescriptionHighlight}>Function.prototype.call</span>,{' '}
          <span className={classes.questionDescriptionHighlight}>Function.prototype.apply</span> or{' '}
          <span className={classes.questionDescriptionHighlight}>Function.prototype.bind</span>, implement the following
          three similar functions on the Function prototype:
        </p>
        <ol>
          <li>
            <span className={classes.questionDescriptionHighlight}>myCall(thisContext, ...args)</span>
            <div className={classes.break} />
            <p>
              <span className={classes.questionDescriptionHighlight}>myCall</span> should call the original function
              with <span className={classes.questionDescriptionHighlight}>thisContext</span> bound to the function's{' '}
              <span className={classes.questionDescriptionHighlight}>this</span> keyword, passing all of the remaining
              <span className={classes.questionDescriptionHighlight}>args</span> as individual arguments to the
              function.
            </p>
            <p>
              The return value of the original function should be returned by{' '}
              <span className={classes.questionDescriptionHighlight}>myCall</span>.
            </p>
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>myApply(thisContext, args)</span>
            <div className={classes.break} />
            <p>
              <span className={classes.questionDescriptionHighlight}>myApply</span> should call the original function
              with <span className={classes.questionDescriptionHighlight}>thisContext</span> bound to the function's{' '}
              <span className={classes.questionDescriptionHighlight}>this</span> keyword, passing all of the values in
              the <span className={classes.questionDescriptionHighlight}>args</span> array as individual arguments to
              the function.
            </p>
            <p>
              The return value of the original function should be returned by{' '}
              <span className={classes.questionDescriptionHighlight}>myApply</span>.
            </p>
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>myBind(thisContext, ...args)</span>
            <div className={classes.break} />
            <p>
              <span className={classes.questionDescriptionHighlight}>myBind</span> should return a new function that
              calls the original function with <span className={classes.questionDescriptionHighlight}>thisContext</span>{' '}
              bound to the function's <span className={classes.questionDescriptionHighlight}>this</span> keyword,
              passing all of the remaining <span className={classes.questionDescriptionHighlight}>args</span> as
              individual arguments to the function. The new function should accept optional arguments, which should also
              be passed to the original function, after the{' '}
              <span className={classes.questionDescriptionHighlight}>args</span> originally passed to{' '}
              <span className={classes.questionDescriptionHighlight}>myBind</span>.
            </p>
            <p>The new function should return the return value of the original function.</p>
          </li>
        </ol>
        <p>
          You can assume that the <span className={classes.questionDescriptionHighlight}>thisContext</span> argument
          passed to each function will always be an object. When binding this object to the{' '}
          <span className={classes.questionDescriptionHighlight}>this</span> keyword, the original object should be
          bound, not a clone. You can also assume that the original function will be declared using standard function
          syntax (i.e., it won't be an arrow function).
        </p>
        <p>
          You should minimize side-effects as much as possible, ensuring that{' '}
          <span className={classes.questionDescriptionHighlight}>thisContext</span> remains unchanged after calls to
          these functions and ensuring that standard iteration through properties on{' '}
          <span className={classes.questionDescriptionHighlight}>thisContext</span> works normally.
        </p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage</h3>
          <CodeBlock codeString={sampleUsage} />
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Output</h3>
          <section className={classes.codeBlock}>
            <pre className={classes.output}>
              <span className={classes.comment}>// Console logs:</span>
            </pre>
            <pre className={classes.output}>
              0 1 2<span className={classes.comment}> // From myCall.</span>
            </pre>
            <pre className={classes.output}>
              0 1 2<span className={classes.comment}> // From myApply.</span>
            </pre>
            <pre className={classes.output}>
              0 1 2<span className={classes.comment}> // From myBind.</span>
            </pre>
          </section>
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <CodeBlock containerClassName={classes.fullHeight} codeString={solutionCode} hideCode />
      </section>
    </ProjectPage>
  );
};

export default ThisBinding;
