import React from 'react';
import classes from './styles.module.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <button className={`${classes.button} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
