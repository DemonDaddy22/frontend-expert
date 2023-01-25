import React from 'react';
import { getLoremIpsum } from '../../../../utils';
import classes from './styles.module.scss';

const Testimonial = React.forwardRef<HTMLParagraphElement, ITestimonial>((props, ref) => {
  const { id, name } = props;

  return (
    <p data-id={id} ref={ref} className={classes.testimonial}>{name} {getLoremIpsum()}</p>
  );
});

export default React.memo(Testimonial);
