import React from 'react';
import { getLoremIpsum, isEmptyString } from '../../../../utils';
import classes from './styles.module.scss';

const Testimonial = React.forwardRef<HTMLParagraphElement, ITestimonial>((props, ref) => {
  const { id, name, avatar } = props;

  return (
    <div className={classes.testimonial}>
      {!isEmptyString(avatar) && (
        <div className={classes.avatar}>
          <img src={avatar} alt={name} className={classes.avatar} />
        </div>
      )}
      <div className={classes.description}>
        <h3 className={classes.name}>{name}</h3>
        <p data-id={id} ref={ref} className={classes.message}>
          {getLoremIpsum()}
        </p>
      </div>
    </div>
  );
});

export default React.memo(Testimonial);
