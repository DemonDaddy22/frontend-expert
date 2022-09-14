import React from 'react';
import classes from './styles.module.scss';

const FormGroup: React.FC<FormGroupProps> = (props) => {
  const { style = {}, className, children } = props;

  return (
    <section className={`${classes.formGroup} ${className}`} style={style}>
      {children}
    </section>
  );
};

export default FormGroup;
