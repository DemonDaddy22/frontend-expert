import React from 'react';
import classes from './styles.module.scss';

const QuestionDetails: React.FC<QuestionDetailsProps> = (props) => {
  const {
    title,
    titleClassName = '',
    titleStyle = {},
    containerClassName = '',
    containerStyle = {},
    descriptionClassName = '',
    descriptionStyle = {},
    children,
  } = props;
  return (
    <section className={`${classes.questionContainer} ${containerClassName}`} style={containerStyle}>
      <h1 className={`${classes.questionTitle} ${titleClassName}`} style={titleStyle}>
        {title}
      </h1>
      <div className={`${classes.questionDescription} ${descriptionClassName}`} style={descriptionStyle}>
        {children}
      </div>
    </section>
  );
};

export default QuestionDetails;
