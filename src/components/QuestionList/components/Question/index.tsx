import React, { useMemo } from 'react';
import classes from './styles.module.scss';
import { QUESTION_LIST_SUBMISSION_STATUS } from '../../../../constants';

interface IProps {
  name: string;
  status: string | null;
}

const Question: React.FC<IProps> = ({ name, status }) => {
  const statusClassName = useMemo(() => {
    const baseClassName = classes.status;
    switch (status) {
      case QUESTION_LIST_SUBMISSION_STATUS.CORRECT:
        return `${baseClassName} ${classes.statusCorrect}`;
      case QUESTION_LIST_SUBMISSION_STATUS.PARTIALLY_CORRECT:
        return `${baseClassName} ${classes.statusPartiallyCorrect}`;
      case QUESTION_LIST_SUBMISSION_STATUS.INCORRECT:
        return `${baseClassName} ${classes.statusIncorrect}`;
      default:
        return baseClassName;
    }
  }, [status]);

  return (
    <div className={classes.question}>
      <div className={statusClassName} />
      <p className={classes.name}>{name}</p>
      <div className={classes.endBlock} />
    </div>
  );
};

export default Question;
