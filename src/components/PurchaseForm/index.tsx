import React from 'react';
import { COLORS, PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import ColourBlock from '../UI/ColourBlock';
import classes from './styles.module.scss';

const PurchaseForm: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT8.background}>
      <QuestionDetails
        title='Purchase Form'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}>
        <p>
          You're given an HTML file with the markup for a purchase form, similar to the actual purchase form on
          AlgoExpert.
        </p>
        <p>Using only CSS, style the purchase form to have the following characteristics:</p>
        <ul>
          <li>
            The <span className={classes.questionDescriptionHighlight}>.wrapper</span> should have 12px of padding, a
            border radius of 12px, and a background color of #E0E0E0
            <ColourBlock colour='#E0E0E0' />.
          </li>
          <li>
            The ordered list should be styled as a stepper component:
            <ul>
              <li>
                This stepper should be horizontally centered with no padding, but it should maintain its default
                vertical margin.
              </li>
              <li>
                Each list item in the stepper should have its corresponding item number above its text content, and this
                number should be inside of a circle with a white
                <ColourBlock colour={COLORS.WHITE} />
                background color, a width of 30px, 8px of bottom margin, a font-size of 24px, and a solid, black
                <ColourBlock colour={COLORS.BLACK} className={classes.colorBlockBorder} />, 4px border. The number
                inside of the circle should be horizontally and vertically centered, and the circle should be
                horizontally centered above the text content.
              </li>
              <li>
                The number-circle for the list item with the{' '}
                <span className={classes.questionDescriptionHighlight}>selected</span> class should have white
                <ColourBlock colour={COLORS.WHITE} />
                text and a background color of #279600
                <ColourBlock colour='#279600' />.
              </li>
              <li>
                Between each pair of adjacent number-circles should be a 4px-tall black horizontal line. These divider
                lines should be vertically centered with respect to the number-circles, and they should sit exactly
                between the circles, just touching their edges.
              </li>
            </ul>
          </li>
          <li>
            The unordered list should be styled as follows:
            <ul>
              <li>The unordered list should maintain its default margin, but it should have no padding.</li>
              <li>
                Each list item in the unordered list represents a single product offering and should have 12px of
                padding, 12px of vertical margin, a height of 40px, a border-radius of 8px, bold font, and a white
                <ColourBlock colour={COLORS.WHITE} />
                background color.
              </li>
              <li>
                The labels should have 4px of left margin and a text color based on the list-item class, following this
                mapping:
                <ul>
                  <li>
                    <span className={classes.questionDescriptionHighlight}>.blue-product</span>: #8C96F6
                    <ColourBlock colour='#8C96F6' />
                  </li>
                  <li>
                    <span className={classes.questionDescriptionHighlight}>.red-product</span>: #E64970
                    <ColourBlock colour='#E64970' />
                  </li>
                  <li>
                    <span className={classes.questionDescriptionHighlight}>.orange-product</span>: #F37F1B
                    <ColourBlock colour='#F37F1B' />
                  </li>
                  <li>
                    <span className={classes.questionDescriptionHighlight}>.green-product</span>: #25B59B
                    <ColourBlock colour='#25B59B' />
                  </li>
                </ul>
              </li>
              <li>
                Each product-offering list item should also have a solid, 5px left border of the same color as its text.
              </li>
            </ul>
          </li>
          <li>
            The "Continue" button should be aligned to the right side of the{' '}
            <span className={classes.questionDescriptionHighlight}>.wrapper</span>, with 12px of padding, a font-size of
            16px, a border radius of 8px, a background color of #02203C
            <ColourBlock colour='#02203C' className={classes.colorBlockBorder} />
            and a white
            <ColourBlock colour={COLORS.WHITE} />
            text color. For convenience, the starting code includes variables with most of the specified pixel values
            and colors.
          </li>
        </ul>
      </QuestionDetails>
      <section className={classes.formContainer}>
        <ol>
          <li className={classes.selected}>Product Selection</li>
          <li>Payment Method</li>
          <li>Payment Form</li>
          <li>Purchase Success</li>
        </ol>
        <ul>
          <li className={classes.productBlue}>
            <input type='checkbox' id='algoExpert' />
            <label htmlFor='algoExpert'>AlgoExpert</label>
          </li>
          <li className={classes.productRed}>
            <input type='checkbox' id='systemsExpert' />
            <label htmlFor='systemsExpert'>SystemsExpert</label>
          </li>
          <li className={classes.productOrange}>
            <input type='checkbox' id='mlExpert' />
            <label htmlFor='mlExpert'>MLExpert</label>
          </li>
          <li className={classes.productGreen}>
            <input type='checkbox' id='frontendExpert' />
            <label htmlFor='frontendExpert'>FrontendExpert</label>
          </li>
        </ul>
      </section>
    </ProjectPage>
  );
};

export default PurchaseForm;
