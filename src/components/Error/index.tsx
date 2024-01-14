import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import QuestionsMenu from '../ProjectPage/components/QuestionsMenu';
import ProjectNavbar from '../ProjectNavbar';
import { CONTENT_VARIANTS } from '../../constants';

const Error: React.FC<Props> = () => {
  const error: any = useRouteError();

  return (
    <motion.div initial='hidden' animate='visible' className='container'>
      <QuestionsMenu />
      <motion.div variants={CONTENT_VARIANTS} className={classes.error}>
        <h1 className={classes.title}>Oops!</h1>
        <p className={classes.subtitle}>Sorry, an unexpected error has occurred.</p>
        <p className={classes.description}>{error.statusText || error.message}</p>
        <Link to='/' className={classes.redirection}>
          Go to Home
        </Link>
      </motion.div>
      <ProjectNavbar />
    </motion.div>
  );
};

export default Error;
