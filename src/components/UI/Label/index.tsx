import React from 'react';
import classes from './styles.module.scss';

const Label: React.FC<LabelProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <label className={`${classes.label} ${className}`} {...restProps}>
      {children}
    </label>
  );
};

export default Label;
