import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import PhoneInputField from './components/PhoneInputField';
import Divider from '../UI/Divider';

const PhoneInput: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Phone Input'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>You're given a CSS file for a phone input, and you need to implement the component using React.</p>
        <p>The component should return two elements, the input and a submit button.</p>
        <p>The input has the following functionality:</p>
        <ul>
          <li>Typing any character except a number has no effect.</li>
          <li>After typing the first number, a "(" is added before that first number. For example, "(1".</li>
          <li>
            After typing the fourth number, a ") " is added before that new number. For example, "(123) 4". Note there
            is a space after the closing parenthesis.
          </li>
          <li>After typing the seventh number, a "-" is added before that new number. For example, "(123) 456-7".</li>
          <li>No more than 10 numbers can be typed, meaning a completed phone number looks like "(123) 456-7890".</li>
          <li>
            If multiple numbers are typed at once, the same formatting rules apply as if they were typed one at a time.
          </li>
          <li>Pressing backspace removes one number at a time, including any corresponding formatting characters.</li>
          <li>If the input is empty, it has a placeholder of "(555) 555-5555".</li>
        </ul>
        <p>To the left of the input is a button with the text of "Submit" and the following characteristics:</p>
        <ul>
          <li>If the input does not have a complete phone number, the button is disabled.</li>
          <li>Clicking the button when it is enabled clears the input, including any formatting characters.</li>
        </ul>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <PhoneInputField />
      </section>
    </ProjectPage>
  );
};

export default PhoneInput;
