import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import classes from './styles.module.scss';
import QuestionsMenu from '../../components/ProjectPage/components/QuestionsMenu';
import ProjectNavbar from '../../components/ProjectNavbar';

const Error: React.FC<Props> = () => {
  const error: any = useRouteError();

  return (
    <div className='container'>
      <QuestionsMenu />
      <div className={classes.error}>
        <h1 className={classes.title}>Oops!</h1>
        <p className={classes.subtitle}>Sorry, an unexpected error has occurred.</p>
        <p className={classes.description}>{error.statusText || error.message}</p>
        <Link to='/' className={classes.redirection}>
          Go to Home
        </Link>
      </div>
      <ProjectNavbar />
    </div>
  );
};

export default Error;
