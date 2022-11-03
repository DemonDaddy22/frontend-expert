import React from 'react';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import classes from './styles.module.scss';

const Promisify: React.FC<Props> = () => {
  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT18.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Promisify'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}></QuestionDetails>
    </ProjectPage>
  );
};

export default Promisify;
