import React, { forwardRef } from 'react';
import classes from './styles.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { fullWidth = true, className, ...restProps } = props;

  return (
    <input
      ref={ref}
      className={`${classes.input} ${className} ${
        fullWidth ? classes.fullWidth : ''
      }`}
      {...restProps}
    />
  );
});

export default Input;
