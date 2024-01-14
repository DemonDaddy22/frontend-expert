import React from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import { CONTENT_VARIANTS } from '../../constants';

const questionDetailVariants = {
  visible: { transition: { staggerChildren: 0.4 } },
  hidden: {},
};

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
    <motion.section variants={questionDetailVariants} className={`${classes.questionContainer} ${containerClassName}`} style={containerStyle}>
      <motion.div variants={CONTENT_VARIANTS}>
        <h1 className={`${classes.questionTitle} ${titleClassName}`} style={titleStyle}>
          {title}
        </h1>
      </motion.div>
      <motion.div variants={CONTENT_VARIANTS} className={`${classes.questionDescription} ${descriptionClassName}`} style={descriptionStyle}>
        {children}
      </motion.div>
    </motion.section>
  );
};

export default QuestionDetails;
