import React from 'react';
import classes from './styles.module.scss';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { children, size = 32, className = '', ...restProps } = props;

  return (
    <button ref={ref} className={`${classes.button} ${className}`} style={{ width: size, height: size }} {...restProps}>
      {children}
    </button>
  );
});

export default IconButton;
