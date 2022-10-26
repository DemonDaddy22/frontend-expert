import React from 'react';
import classes from './styles.module.scss';

const Divider: React.FC<DividerProps> = (props) => {
  const { isVertical = false, className = '', style = {} } = props;

  return (
    <div
      className={`${isVertical ? classes.dividerVertical : classes.dividerHorizontal} ${className}`}
      style={style}
    >
    </div>
  );
};

export default Divider;
