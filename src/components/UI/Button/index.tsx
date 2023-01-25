import React from 'react';
import classes from './styles.module.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={`${classes.button} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export const ButtonWhite: React.FC<ButtonProps> = (props) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={`${className} ${classes.buttonWhite}`} {...restProps}>
      {children}
    </button>
  );
};

export const ButtonBlack: React.FC<ButtonProps> = (props) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={`${className} ${classes.buttonBlack}`} {...restProps}>
      {children}
    </button>
  );
};

export const ButtonBlue: React.FC<ButtonProps> = (props) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={`${className} ${classes.buttonBlue}`} {...restProps}>
      {children}
    </button>
  );
};

export const ButtonRed: React.FC<ButtonProps> = (props) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={`${className} ${classes.buttonRed}`} {...restProps}>
      {children}
    </button>
  );
};

export const ButtonGreen: React.FC<ButtonProps> = (props) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={`${className} ${classes.buttonGreen}`} {...restProps}>
      {children}
    </button>
  );
};

export const ButtonYellow: React.FC<ButtonProps> = (props) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={`${className} ${classes.buttonYellow}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
