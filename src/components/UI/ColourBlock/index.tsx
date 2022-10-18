import React, { useCallback } from 'react';
import { copyTextToClipboard } from '../../../utils';
import classes from './styles.module.scss';

const ColourBlock: React.FC<ColourBlockProps> = (props) => {
  const { colour, className = '', style = {} } = props;

  const handleBlockClick = useCallback(() => {
    copyTextToClipboard(colour);
  }, [colour]);

  return (
    <span
      className={`${classes.colourBlock} ${className}`}
      style={{ ...style, backgroundColor: colour }}
      onClick={handleBlockClick}
    />
  );
};

export default ColourBlock;
