import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import classes from './styles.module.scss';

const SampleUsage1 = `describe('Passing Test Suite', () => {
  it('Passing Test Case #1', () => {
    expect('foo').toExist();
    expect(1 + 1).toBe(2);
  });

  it('Passing Test Case #2', () => {
    expect({}).toBeType('object');
  });
});`;

const SampleUsage2 = `describe('Failing Test Suite', () => {
  it('Passing Test Case', () => {
    expect(0).toBe(0);
  });

  it('Failing Test Case', () => {
    expect(true).toBe(true);
    expect(true).toBe(false);
  });

  it('Unreachable Test Case', () => {
    expect('foo').toBe('bar');
  });
});`;

const TestingFramework: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT13.background} pageClassName={classes.pageContainer}>
      <QuestionDetails
        title='Testing Framework'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}>
        <p>Implement the following three functions of a basic JavaScript testing framework:</p>
        <ol>
          <li>
            <span className={classes.questionDescriptionHighlight}>describe</span>
            <div className={classes.break} />
            This function defines a test suite of related test cases. It takes in a string{' '}
            <span className={classes.questionDescriptionHighlight}>testSuiteName</span> and a callback{' '}
            <span className={classes.questionDescriptionHighlight}>func</span>, which makes one or more calls to{' '}
            <span className={classes.questionDescriptionHighlight}>it</span>.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>it</span>
            <div className={classes.break} />
            This function defines a single test case in a test suite and is called within a{' '}
            <span className={classes.questionDescriptionHighlight}>describe</span>'s callback{' '}
            <span className={classes.questionDescriptionHighlight}>func</span>. It takes in a string{' '}
            <span className={classes.questionDescriptionHighlight}>testCaseName</span> and its own callback{' '}
            <span className={classes.questionDescriptionHighlight}>func</span>, which makes one or more calls to{' '}
            <span className={classes.questionDescriptionHighlight}>expect</span>.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>expect</span>
            <div className={classes.break} />
            This function defines a single check in a test case and is called within an{' '}
            <span className={classes.questionDescriptionHighlight}>it</span>'s callback{' '}
            <span className={classes.questionDescriptionHighlight}>func</span>. It takes in an arbitrary parameter
            <span className={classes.questionDescriptionHighlight}>actual</span> and returns an object with the
            following three functions that are used to compare{' '}
            <span className={classes.questionDescriptionHighlight}>actual</span> to other values:
            <ol>
              <li>
                <span className={classes.questionDescriptionHighlight}>expect(actual).toExist()</span>
                <div className={classes.break} />
                This function checks that <span className={classes.questionDescriptionHighlight}>actual</span> is
                neither <span className={classes.questionDescriptionHighlight}>null</span> nor{' '}
                <span className={classes.questionDescriptionHighlight}>undefined</span>.
              </li>
              <li>
                <span className={classes.questionDescriptionHighlight}>expect(actual).toBe(expected)</span>
                <div className={classes.break} />
                This function checks that <span className={classes.questionDescriptionHighlight}>actual</span> is
                strictly equal to <span className={classes.questionDescriptionHighlight}>expected</span>.
              </li>
              <li>
                <span className={classes.questionDescriptionHighlight}>expect(actual).toBeType(type)</span>
                <div className={classes.break} />
                This function checks that <span className={classes.questionDescriptionHighlight}>actual</span> is of the
                type <span className={classes.questionDescriptionHighlight}>type</span>, which can be any string
                returned by the <span className={classes.questionDescriptionHighlight}>typeof</span> operator.
              </li>
            </ol>
          </li>
        </ol>
        <p>As a test suite and its test cases are executed, they should print the following strings:</p>
        <section className={classes.codeBlock}>
          <pre className={classes.caseWrapper}>
            <p className={classes.comment}>When a test suite begins:</p>
            <p className={classes.outputString}>"beginning test suite {`{testSuiteName}`}" </p>
          </pre>
          <pre className={classes.caseWrapper}>
            <p className={classes.comment}>When a test suite successfully completes:</p>
            <p className={classes.outputString}>"successfully completed test suite {`{testSuiteName}`}" </p>
          </pre>
          <pre className={classes.caseWrapper}>
            <p className={classes.comment}>When a test case begins:</p>
            <p className={classes.outputString}>"beginning test case {`{testCaseName}`}" </p>
          </pre>
          <pre className={classes.caseWrapper}>
            <p className={classes.comment}>When a test case successfully completes:</p>
            <p className={classes.outputString}>"successfully completed test case {`{testCaseName}`}" </p>
          </pre>
          <pre className={classes.caseWrapper}>
            <p className={classes.comment}>When a test suite fails (because a check in one of its test cases fails):</p>
            <p className={classes.outputString}>
              "failed running test suite {`{testSuiteName}`} on test case {`{testCaseName}`} with error message{' '}
              {`{errorMessage}`}"{' '}
            </p>
          </pre>
          <pre className={classes.caseWrapper}>
            <p className={classes.comment}>When `expect(actual).toExist()` fails, `errorMessage` should be:</p>
            <p className={classes.outputString}>"expected value to exist but got {`{actual}`}" </p>
          </pre>
          <pre className={classes.caseWrapper}>
            <p className={classes.comment}>When `expect(actual).toBe(expected)` fails, `errorMessage` should be:</p>
            <p className={classes.outputString}>
              "expected {`{actual}`} to be {`{expected}`}"{' '}
            </p>
          </pre>
          <pre className={classes.caseWrapper}>
            <p className={classes.comment}>When `expect(actual).toBeType(type)` fails, `errorMessage` should be:</p>
            <p className={classes.outputString}>
              "expected {`{actual}`} to be of type {`{type}`} but got {`{typeOfActual}`}"{' '}
            </p>
          </pre>
        </section>
        <p>When a check fails, the following things should happen:</p>
        <ol>
          <li>
            The relevant <span className={classes.questionDescriptionHighlight}>expect</span> function should throw the
            appropriate <span className={classes.questionDescriptionHighlight}>errorMessage</span>.
          </li>
          <li>
            The relevant <span className={classes.questionDescriptionHighlight}>it</span> function should throw an
            arbitrary error, and its execution should stop.
          </li>
          <li>
            The relevant <span className={classes.questionDescriptionHighlight}>describe</span> function should print
            the failure string with <span className={classes.questionDescriptionHighlight}>console.error</span> (all
            other strings should be printed with{' '}
            <span className={classes.questionDescriptionHighlight}>console.log</span>), and its execution should stop.
          </li>
        </ol>
        <p>For the sake of simplicity:</p>
        <ul>
          <li>All output strings should be in lowercase letters, with no punctuation whatsoever.</li>
          <li>
            No modifications should be made to{' '}
            <span className={classes.questionDescriptionHighlight}>testSuiteName</span> and{' '}
            <span className={classes.questionDescriptionHighlight}>testCaseName</span> values (they shouldn't be
            lowercased).
          </li>
          <li>
            When <span className={classes.questionDescriptionHighlight}>actual</span> and{' '}
            <span className={classes.questionDescriptionHighlight}>expected</span> values are printed within error
            messages, they should be stringified with
            <span className={classes.questionDescriptionHighlight}>JSON.stringify()</span>.
          </li>
        </ul>
        <p>
          Note that this question's tests naturally check that{' '}
          <span className={classes.questionDescriptionHighlight}>console.log</span> and{' '}
          <span className={classes.questionDescriptionHighlight}>console.error</span> are correctly called; this means
          that debugging your solution with <span className={classes.questionDescriptionHighlight}>console.log</span>{' '}
          will unavoidably make your solution fail some tests.
        </p>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage #1</h3>
          <SyntaxHighlighter language='javascript' style={monokai} showLineNumbers className={classes.codeBlock}>
            {SampleUsage1}
          </SyntaxHighlighter>
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Output #1</h3>
          <section className={classes.codeBlock}>
            <pre className={classes.comment}>// Console logs:</pre>
            <pre className={classes.output}>beginning test suite Passing Test Suite </pre>
            <pre className={classes.output}>beginning test case Passing Test Case #1 </pre>
            <pre className={classes.output}>successfully completed test case Passing Test Case #1 </pre>
            <pre className={classes.output}>beginning test case Passing Test Case #2 </pre>
            <pre className={classes.output}>successfully completed test case Passing Test Case #2 </pre>
            <pre className={classes.output}>successfully completed test suite Passing Test Suite </pre>
          </section>
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Usage #2</h3>
          <SyntaxHighlighter language='javascript' style={monokai} showLineNumbers className={classes.codeBlock}>
            {SampleUsage2}
          </SyntaxHighlighter>
        </div>
        <div className={classes.codeWrapper}>
          <h3 className={classes.codeBlockHeader}>Sample Output #2</h3>
          <section className={classes.codeBlock}>
            <pre className={classes.comment}>// Console logs:</pre>
            <pre className={classes.output}>beginning test suite Failing Test Suite </pre>
            <pre className={classes.output}>beginning test case Passing Test Case </pre>
            <pre className={classes.output}>successfully completed test case Passing Test Case </pre>
            <pre className={classes.output}>beginning test case Failing Test Case </pre>
            <pre className={classes.comment}>// Console errors:</pre>
            <pre className={classes.output}>
              failing running test suite Failing Test Suite on test case Failing Test Case with error message expected
              true to be false{' '}
            </pre>
          </section>
        </div>
      </QuestionDetails>
    </ProjectPage>
  );
};

export default TestingFramework;
