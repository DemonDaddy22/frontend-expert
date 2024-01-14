import React from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';

const projectVariants = {
  visible: { transition: { staggerChildren: 0.5, delayChildren: 0.15 } },
  hidden: {},
};

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  const { background = '', pageClassName = '', pageStyle = {}, containerClassName = '', containerStyle = {}, children } = props;

  return (
    <main className={`${classes.page} ${pageClassName}`} style={{ ...pageStyle, background }}>
      <motion.section
        variants={projectVariants}
        initial='hidden'
        animate='visible'
        className={`${classes.contentContainer} ${containerClassName}`}
        style={containerStyle}
      >
        {children}
      </motion.section>
    </main>
  );
};

export default ProjectPage;
