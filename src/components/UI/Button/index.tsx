import React from 'react';
import classes from './styles.module.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className } = props;

  return (
    <button className={`${classes.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
