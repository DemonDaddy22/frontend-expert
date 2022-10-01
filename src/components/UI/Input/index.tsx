import React from 'react';
import classes from './styles.module.scss';

const Input: React.FC<InputProps> = (props) => {
  const { fullWidth = true, className, ...restProps } = props;

  return (
    <input
      className={`${classes.input} ${className} ${
        fullWidth ? classes.fullWidth : ''
      }`}
      {...restProps}
    />
  );
};

export default Input;
