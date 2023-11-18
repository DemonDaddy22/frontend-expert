import React, { useCallback, useState } from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import { PROJECT_COLORS } from '../../constants/theme';
import CodeBlock from '../UI/CodeBlock';
import { sampleToastItem } from './codeBlock';
import ToastCreator from './components/ToastCreator';
import Toast from './components/Toast';

// TODO - handle toasts animation using framer

const Toasts: React.FC<Props> = () => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const handleRemoveToast = useCallback((id: number) => {
    setToasts((prevToasts) => {
      const toastIndex = prevToasts.findIndex((item) => item.id === id);
      if (toastIndex >= 0) {
        clearTimeout(prevToasts[toastIndex].timeoutId);
        const updatedToasts = [...prevToasts.slice(0, toastIndex), ...prevToasts.slice(toastIndex + 1)];
        return updatedToasts;
      }
      return prevToasts;
    });
  }, []);

  const handleAddToast = useCallback((toast: IToast) => {
    setToasts((prevToasts) => {
      const toastTimeOutId = setTimeout(() => handleRemoveToast(toast.id), toast.duration);
      return [{ ...toast, timeoutId: toastTimeOutId }, ...prevToasts];
    });
  }, []);

  const handleClearToasts = useCallback(() => {
    setToasts((prevToasts) => {
      prevToasts.forEach(({ timeoutId }) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      });
      return [];
    });
  }, []);

  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT35.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Toasts'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          You're given HTML and CSS files for a simple toast system, and you need to make the toast system functional
          using JavaScript.
        </p>
        <p>
          A toast is a simple pop-up that appears on a page, usually to communicate status information to a user. The
          toast system that you have to build is meant to let you create toasts of different genres.
        </p>
        <p>
          First of all, clicking the provided <span className={classes.questionDescriptionHighlight}>#add-button</span>{' '}
          button should create a toast by prepending the appropriate HTML to the provided{' '}
          <span className={classes.questionDescriptionHighlight}>#toasts</span> div, and toasts should generally follow
          this HTML format:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleToastItem} language='xml' />
        </div>
        <p>
          There shouldn't be a limit to how many toasts can be created at the same time, but each toast should disappear
          after some period of time, specified by one of the provided inputs on the page (see the bullet points below).
          Also, clicking the <span className={classes.questionDescriptionHighlight}>#clear-button</span> button should
          immediately remove all toasts from the page.
        </p>
        <p>The toasts should be customizable with the various provided inputs, as follows:</p>
        <ul>
          <li>
            The <span className={classes.questionDescriptionHighlight}>#success</span> and{' '}
            <span className={classes.questionDescriptionHighlight}>#error</span> radio buttons should control if the
            next toast is a success toast or an error toast. Success toasts should have the{' '}
            <span className={classes.questionDescriptionHighlight}>success-toast</span> class, while error toasts should
            have the <span className={classes.questionDescriptionHighlight}>error-toast</span> class.
          </li>
          <li>
            The <span className={classes.questionDescriptionHighlight}>#message-content</span> textarea should control
            the contents of the next toast. If no message is present in the textarea, the toast message should default
            to either "Success!" or "Error.", depending on if the toast is a success toast or an error toast. The toast
            message should always be a paragraph with the class{' '}
            <span className={classes.questionDescriptionHighlight}>message</span>.
          </li>
          <li>
            The <span className={classes.questionDescriptionHighlight}>#duration</span> input should control how long
            the next toast is visible in milliseconds. If the duration value is less than 500, an empty string, or
            otherwise not a number, a default value of 500 milliseconds should be used.
          </li>
          <li>
            The <span className={classes.questionDescriptionHighlight}>#cancelable</span> checkbox should control
            whether the next toast has a cancel button:
            <ul>
              <li>If the checkbox isn't checked, the toast shouldn't have a cancel button in its HTML.</li>
              <li>
                A cancel button should always have the{' '}
                <span className={classes.questionDescriptionHighlight}>cancel-button</span> class and{' '}
                <span className={classes.questionDescriptionHighlight}>X</span> as its text content.
              </li>
              <li>Clicking the cancel button should immediately remove the relevant toast from the page.</li>
            </ul>
          </li>
        </ul>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <ToastCreator addToast={handleAddToast} clearToasts={handleClearToasts} />
        <div className={classes.toastsContainer}>
          {toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} onRemove={handleRemoveToast} />
          ))}
        </div>
      </section>
    </ProjectPage>
  );
};

export default Toasts;
