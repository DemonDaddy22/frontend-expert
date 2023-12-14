import React from 'react';
import { useRouteError } from 'react-router-dom';
import classes from './styles.module.scss';

// TODO - improve design
const Error: React.FC<Props> = () => {
  const error: any = useRouteError();

  return (
    <div className={classes.error}>
      <h1 className={classes.title}>Oops!</h1>
      <p className={classes.subtitle}>Sorry, an unexpected error has occurred.</p>
      <p className={classes.description}>{error.statusText || error.message}</p>
      <a href='/' className={classes.redirection}>
        Go to Home
      </a>
    </div>
  );
};

export default Error;
