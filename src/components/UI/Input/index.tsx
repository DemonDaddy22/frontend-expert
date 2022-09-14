import React from 'react';
import classes from './styles.module.scss';

const Input: React.FC<InputProps> = (props) => {
  const { fullWidth = true, className } = props;

  return (
    <input
      className={`${classes.input} ${className} ${
        fullWidth ? classes.fullWidth : ''
      }`}
      {...props}
    />
  );
};

export default Input;
