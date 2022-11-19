import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleUsage, solutionCode } from './codeBlock';
import classes from './styles.module.scss';

const EventTarget: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT15.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Event Target'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          Implement an <span className={classes.questionDescriptionHighlight}>EventTarget</span> class (similar to the
          EventTarget interface of the DOM), which keeps track of event listeners and dispatches events.
        </p>
        <p>
          Your <span className={classes.questionDescriptionHighlight}>EventTarget</span> class should have the following
          three methods:
        </p>
        <ol>
          <li>
            <span className={classes.questionDescriptionHighlight}>addEventListener</span>
            <div className={classes.break} />
            <p>
              This function takes in two arguments: the name of an event as a string and a callback function, to be
              called when the event is dispatched to the target.
            </p>
            <p>
              For example,{' '}
              <span className={classes.questionDescriptionHighlight}>target.addEventListener('click', onClick)</span>{' '}
              should make it such that the <span className={classes.questionDescriptionHighlight}>onClick</span>{' '}
              callback is called when the 'click' event is dispatched to the{' '}
              <span className={classes.questionDescriptionHighlight}>target</span>.
            </p>
            <p>
              A target should be able to have multiple event listeners for the same event (for example,{' '}
              <span className={classes.questionDescriptionHighlight}>onClick1</span> and{' '}
              <span className={classes.questionDescriptionHighlight}>onClick2</span>, both attached to the{' '}
              <span className={classes.questionDescriptionHighlight}>'click'</span>{' '}
              event). However, adding the same exact event listener twice (with the same event and the same callback)
              should have no effect.
            </p>
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>removeEventListener</span>
            <p>
              This function takes in the same arguments as{' '}
              <span className={classes.questionDescriptionHighlight}>addEventListener</span> and removes the relevant
              event listener.
            </p>
            <p>
              For example,{' '}
              <span className={classes.questionDescriptionHighlight}>target.removeEventListener('click', onClick)</span>{' '}
              should undo the effects of the{' '}
              <span className={classes.questionDescriptionHighlight}>addEventListener</span> call in the bullet point
              above.
            </p>
            <p>
              If there's no current event listener for the passed-in arguments,{' '}
              <span className={classes.questionDescriptionHighlight}>removeEventListener</span> should have no effect.
              Also, if two different callbacks have been added for the same{' '}
              <span className={classes.questionDescriptionHighlight}>'click'</span> event (e.g.,{' '}
              <span className={classes.questionDescriptionHighlight}>onClick1</span> and{' '}
              <span className={classes.questionDescriptionHighlight}>onClick2</span>), removing one shouldn't remove the
              other.
            </p>
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>dispatchEvent</span>
            <p>
              This function takes in the name of an event as a string. If there are no event listeners for that event,
              nothing should happen. Otherwise, event listeners that do exist for that event should have their callback
              functions invoked.
            </p>
            <p>
              For example, given the event listener added in the first bullet point and assuming it hadn't been removed,{' '}
              <span className={classes.questionDescriptionHighlight}>dispatchEvent('click')</span> would call{' '}
              <span className={classes.questionDescriptionHighlight}>onClick</span>.
            </p>
            <p>Events can be dispatched multiple times, and each time, every associated callback should be invoked.</p>
          </li>
        </ol>
        <p>
          Note that different event targets should be completely isolated from one another. In other words, if we had
          two event targets with the same event listener, dispatching the appropriate event to one target shouldn't
          trigger the other target.
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
              hello
              <span className={classes.comment}> // From the first 'hello' dispatch</span>
            </pre>
            <pre className={classes.output}>
              world
              <span className={classes.comment}> // From the first 'world' dispatch</span>
            </pre>
            <pre className={classes.output}>
              world
              <span className={classes.comment}> // From the second 'world' dispatch</span>
            </pre>
            <pre className={classes.output}>
              <span className={classes.comment}>// The second 'hello' dispatch does nothing because</span>
            </pre>
            <pre className={classes.output}>
              <span className={classes.comment}>// the event listener was removed above it</span>
            </pre>
          </section>
        </div>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <CodeBlock codeString={solutionCode} containerClassName={classes.fullHeight} hideCode />
      </section>
    </ProjectPage>
  );
};

export default EventTarget;
