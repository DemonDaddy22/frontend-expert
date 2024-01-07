import React from 'react';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage1, sampleUsage2, solutionCode } from './codeBlocks';
import classes from './styles.module.scss';
import Divider from '../UI/Divider';

const Promises: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Promises'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Write a <span className={classes.questionDescriptionHighlight}>MyPromise</span> class based on the native{' '}
          <span className={classes.questionDescriptionHighlight}>Promise</span> built-in class.
        </p>
        <p>
          An instance of the <span className={classes.questionDescriptionHighlight}>MyPromise</span> class will always have one of three states:{' '}
          <span className={classes.questionDescriptionHighlight}>'pending'</span>,{' '}
          <span className={classes.questionDescriptionHighlight}>'fulfilled'</span>, or{' '}
          <span className={classes.questionDescriptionHighlight}>'rejected'</span>. This state should be accessible through the{' '}
          <span className={classes.questionDescriptionHighlight}>state</span> getter method.
        </p>
        <p>
          When a <span className={classes.questionDescriptionHighlight}>MyPromise</span> is in the fulfilled or rejected state, it will have a value
          which should be accessible through the <span className={classes.questionDescriptionHighlight}>value</span> getter method. A pending promise
          should always have the value of <span className={classes.questionDescriptionHighlight}>null</span>.
        </p>
        <p>
          The <span className={classes.questionDescriptionHighlight}>MyPromise</span> constructor takes in an executor function, which takes two
          callbacks: <span className={classes.questionDescriptionHighlight}>resolve</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>reject</span>. This executor function should run immediately. Both of the callbacks
          passed to the executor function take in a value, which when called will set the value of the{' '}
          <span className={classes.questionDescriptionHighlight}>MyPromise</span> as well as update the state based on which callback was called (
          <span className={classes.questionDescriptionHighlight}>resolve</span> sets it to fulfilled, while{' '}
          <span className={classes.questionDescriptionHighlight}>reject</span> sets it to rejected). If the executor function throws an error, the{' '}
          <span className={classes.questionDescriptionHighlight}>MyPromise</span> should be rejected with the error value. For simplicity, you can
          assume only one of these callbacks will ever be called, and it will never be called more than once.
        </p>
        <p>
          An instance of the <span className={classes.questionDescriptionHighlight}>MyPromise</span> class should have two public methods:{' '}
          <span className={classes.questionDescriptionHighlight}>then</span> and <span className={classes.questionDescriptionHighlight}>catch</span>{' '}
          with the following functionality:
        </p>
        <ul>
          <li>
            <span className={classes.questionDescriptionHighlight}>then(onFulfilled, onRejected)</span>: Runs one of the callbacks after the{' '}
            <span className={classes.questionDescriptionHighlight}>MyPromise</span> has settled. If the{' '}
            <span className={classes.questionDescriptionHighlight}>MyPromise</span> is fulfilled, the value should be passed to the{' '}
            <span className={classes.questionDescriptionHighlight}>onFulfilled</span> callback. If the{' '}
            <span className={classes.questionDescriptionHighlight}>MyPromise</span> is rejected, the value should be passed to the{' '}
            <span className={classes.questionDescriptionHighlight}>onRejected</span> callback. The then method should return a new{' '}
            <span className={classes.questionDescriptionHighlight}>MyPromise</span> that resolves to the value as returned by either{' '}
            <span className={classes.questionDescriptionHighlight}>onFulfilled</span> or{' '}
            <span className={classes.questionDescriptionHighlight}>onRejected</span>. If either{' '}
            <span className={classes.questionDescriptionHighlight}>onFulfilled</span> or{' '}
            <span className={classes.questionDescriptionHighlight}>onRejected</span> throws an error, the returned{' '}
            <span className={classes.questionDescriptionHighlight}>MyPromise</span> should be rejected with that error value.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>catch(onRejected)</span>: Runs the{' '}
            <span className={classes.questionDescriptionHighlight}>onRejected</span> callback after the{' '}
            <span className={classes.questionDescriptionHighlight}>MyPromise</span> has been rejected. The value should be passed to the{' '}
            <span className={classes.questionDescriptionHighlight}>onRejected</span> callback. The{' '}
            <span className={classes.questionDescriptionHighlight}>catch</span> method should return a new{' '}
            <span className={classes.questionDescriptionHighlight}>MyPromise</span> that resolves to the value returned by{' '}
            <span className={classes.questionDescriptionHighlight}>onRejected</span>. If{' '}
            <span className={classes.questionDescriptionHighlight}>onRejected</span> throws an error, the returned{' '}
            <span className={classes.questionDescriptionHighlight}>MyPromise</span> should be rejected with that error value.
          </li>
        </ul>
        <p>
          Both <span className={classes.questionDescriptionHighlight}>then</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>catch</span> return new{' '}
          <span className={classes.questionDescriptionHighlight}>MyPromise</span> objects, meaning these methods should be chainable with the next
          call in the chain not running until the previous call completes. None of these callbacks should run until all other code in the call stack
          completes (i.e. they should be treated as microtasks by the event loop).
        </p>
        <p>
          If multiple calls to <span className={classes.questionDescriptionHighlight}>then</span> and/or{' '}
          <span className={classes.questionDescriptionHighlight}>catch</span> are made on the same{' '}
          <span className={classes.questionDescriptionHighlight}>MyPromise</span>, their callback functions should be invoked in the order that{' '}
          <span className={classes.questionDescriptionHighlight}>then</span> and <span className={classes.questionDescriptionHighlight}>catch</span>{' '}
          were called (see sample usage #2).
        </p>
        <p>
          All of the callback functions to <span className={classes.questionDescriptionHighlight}>then</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>catch</span> are optional. If the required callback is not passed, a new{' '}
          <span className={classes.questionDescriptionHighlight}>MyPromise</span> should be returned with the previous value and state.
        </p>
        <p>
          Your code should not use the native <span className={classes.questionDescriptionHighlight}>Promise</span> object in any way.
        </p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage #1</h3>
          <CodeBlock codeString={sampleUsage1} />
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Output #1</h3>
          <section className={classes.codeBlock}>
            <pre className={classes.output}>
              <span className={classes.comment}>{'// Console logs:'}</span>
            </pre>
            <pre className={classes.output}>end</pre>
            <pre className={classes.output}>10</pre>
            <pre className={classes.output}>20</pre>
            <pre className={classes.output}>error: 30</pre>
            <pre className={classes.output}>50</pre>
            <pre className={classes.output}>error: 60</pre>
            <pre className={classes.output}>70</pre>
          </section>
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage #2</h3>
          <CodeBlock codeString={sampleUsage2} />
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Output #2</h3>
          <section className={classes.codeBlock}>
            <pre className={classes.output}>
              <span className={classes.comment}>{'// Console logs:'}</span>
            </pre>
            <pre className={classes.output}>end</pre>
            <pre className={classes.output}>20</pre>
            <pre className={classes.output}>15</pre>
          </section>
        </div>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} hideCode />
      </section>
    </ProjectPage>
  );
};

export default Promises;
