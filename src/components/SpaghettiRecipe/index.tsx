import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import classes from './styles.module.scss';

const SpaghettiRecipe: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT3.background}>
      <QuestionDetails title='Spaghetti Recipe' titleClassName={classes.questionTitle}>
        <p className={classes.questionDescriptionParagraph}>
          You've been provided with a recipe for spaghetti as raw text, and you need to convert this recipe into a
          properly marked-up HTML file.
        </p>
        <p className={classes.questionDescriptionParagraph}>
          The recipe should have a primary heading of "Spaghetti Recipe", and it should be divided into two sections,
          the ingredients and the instructions, with the headings "Ingredients" and "Instructions", respectively.
        </p>
        <p className={classes.questionDescriptionParagraph}>
          The ingredients are an unordered list with the following contents:
        </p>
        <ul className={classes.questionDescriptionUnorderedList}>
          <li>Spaghetti</li>
          <li>Marinara Sauce</li>
          <li>Salt</li>
          <li>Water</li>
        </ul>
        <p className={classes.questionDescriptionParagraph}>
          The instructions are an ordered list with the following contents:
        </p>
        <ol className={classes.questionDescriptionOrderedList}>
          <li>Bring water to a boil.</li>
          <li>
            Add spaghetti to boiling water
            <ol>
              <li>Add salt to taste.</li>
              <li>Cook for 10 minutes, stirring occasionally.</li>
            </ol>
          </li>
          <li>Add marinara sauce to a pan, bringing to a simmer.</li>
          <li>Mix cooked spaghetti with marinara sauce.</li>
          <li>Enjoy!</li>
        </ol>
        <p className={classes.questionDescriptionParagraph}>
          Note that "Add salt to taste." and "Cook for 10 minutes, stirring occasionally." are in a sub-ordered list
          under the second instruction. Your HTML code should use proper semantic markup.
        </p>
      </QuestionDetails>
      <main className={classes.recipeContainer}>
        <header>
          <h1 className={classes.recipeTitle}>Spaghetti Recipe</h1>
        </header>
        <section>
          <h2 className={classes.recipeSectionTitle}>Ingredients</h2>
          <ul>
            <li>Spaghetti</li>
            <li>Marinara Sauce</li>
            <li>Salt</li>
            <li>Walt</li>
          </ul>
        </section>
        <section>
          <h2 className={classes.recipeSectionTitle}>Instructions</h2>
          <ol>
            <li>Bring water to a boil.</li>
            <li>
              Add spaghetti to boiling water
              <ol>
                <li>Add salt to taste.</li>
                <li>Cook for 10 minutes, stirring occasionally.</li>
              </ol>
            </li>
            <li>Add marinara sauce to a pan, bringing to a simmer.</li>
            <li>Mix cooked spaghetti with marinara sauce.</li>
            <li>Enjoy!</li>
          </ol>
        </section>
      </main>
    </ProjectPage>
  );
};

export default SpaghettiRecipe;
