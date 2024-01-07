import React from 'react';
import classes from './styles.module.scss';
import Question from '../Question';

interface IProps extends ISection {
  title: string;
}

const QuestionSection: React.FC<IProps> = ({ title, correctCount, questions }) => {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>
        {title} - {correctCount}/{questions.length}
      </h2>
      <div className={classes.questions}>
        {questions.map(({ id, name, status }) => (
          <Question key={id} status={status} name={name} />
        ))}
      </div>
    </section>
  );
};

export default QuestionSection;
