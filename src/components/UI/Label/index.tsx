import React from 'react';
import classes from './styles.module.scss';

const Label: React.FC<LabelProps> = (props) => {
  const { children, className } = props;

  return (
    <label className={`${classes.label} ${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
