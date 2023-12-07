import React, { useCallback } from 'react';
import classes from './styles.module.scss';
import FormGroup from '../../../UI/FormGroup';
import Input from '../../../UI/Input';
import Label from '../../../UI/Label';
import { isEmptyString } from '../../../../utils';

// TODO - handle HTML codes in strings

const Question: React.FC<IQuizQuestionProps> = ({
  question,
  answers,
  correctAnswer,
  difficulty,
  category,
  attempt,
  onOptionSelect,
}) => {
  const getOptionClassName = useCallback(
    (answer: string) => {
      const baseClassName = classes.option;
      if (attempt === answer) {
        return `${baseClassName} ${attempt === correctAnswer ? classes.optionCorrect : classes.optionIncorrect}`;
      }
      return baseClassName;
    },
    [attempt, correctAnswer]
  );

  return (
    <section className={classes.question}>
      <h2 className={classes.title}>{question}</h2>
      <div className={classes.description}>
        {!isEmptyString(category) ? <p className={classes.category}>{category}</p> : null}
        {!isEmptyString(difficulty) ? <p className={classes.difficulty}>{difficulty}</p> : null}
      </div>
      <div className={classes.options}>
        {answers.map((answer, index) => (
          <FormGroup className={getOptionClassName(answer)} key={index}>
            <Input
              id={`option-${index}`}
              type='radio'
              onChange={() => onOptionSelect(answer)}
              checked={answer === attempt}
              fullWidth={false}
            />
            <Label htmlFor={`option-${index}`}>{answer}</Label>
          </FormGroup>
        ))}
      </div>
    </section>
  );
};

export default Question;
