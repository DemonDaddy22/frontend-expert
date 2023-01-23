import React from 'react';
import classes from './styles.module.scss';

const Testimonial: React.FC<ISTestimonialProps> = (props) => {
  const { message } = props;

  return (
    <p className={classes.testimonial}>{message}</p>
  );
};

export default React.memo(Testimonial);
