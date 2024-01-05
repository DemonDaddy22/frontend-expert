import React from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import Calculator from './components/Calculator';
import Divider from '../UI/Divider';

const TipCalculator: React.FC<Props> = () => {
  return (
    <ProjectPage>
      <QuestionDetails
        title='Tip Calculator'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>You're given a CSS file for a tip calculator, and you need to implement the component using React.</p>
        <p>The tip calculator should have 3 number inputs in this order, each with an associated label:</p>
        <ul>
          <li>
            <span className={classes.questionDescriptionHighlight}>Bill</span>: The total price of a bill, defaulting to
            50.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>Tip Percentage</span>: The percentage that the user
            is tipping, defaulting to 18.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>Number of People</span>: The number of people
            splitting the bill, defaulting to 1.
          </li>
        </ul>
        <p>
          Below the inputs are two paragraphs. The first paragraph displays the total tip, rounded to two decimal
          places. The total tip is calculated by multiplying the bill value by the percentage value (which must be
          converted to a percentage by multiplying by .01). For example, if the bill was $50 and the tip percentage was
          18%, the first paragraph would read: "Total Tip: $9.00".
        </p>
        <p>
          The second paragraph displays the tip per person, rounded to two decimal places. The tip per person is
          calculated by dividing the total tip by the number of people splitting the bill. For example, if the total tip
          was $9.00 and two people are splitting the bill, the second paragraph would read: "Tip Per Person: $4.50".
        </p>
        <p>
          If any of the values needed to calculate the total tip or the tip person are empty strings, then the resulting
          numbers should be replaced by the "-" character without a "$". For example, the second paragraph might read
          "Tip Per Person: -" in this case. For simplicity, you do not need to handle the case where a user types in 0
          or a negative number for any of the inputs.
        </p>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <Calculator />
      </section>
    </ProjectPage>
  );
};

export default TipCalculator;
