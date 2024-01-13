import React from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';

const dividerVariants = {
  visible: {
    width: '100%',
    opacity: 1,
  },
  hidden: {
    width: 0,
    opacity: 0,
  },
};

const Divider: React.FC<DividerProps> = props => {
  const { isVertical = false, className = '', style = {} } = props;

  return (
    <motion.div
      variants={dividerVariants}
      className={`${isVertical ? classes.dividerVertical : classes.dividerHorizontal} ${className}`}
      style={style}
    ></motion.div>
  );
};

export default Divider;
