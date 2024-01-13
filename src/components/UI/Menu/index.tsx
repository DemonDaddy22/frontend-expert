import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import { isEmptyList, isEmptyString } from '../../../utils';
import MenuItem from '../MenuItem';
import { CONTENT_VARIANTS } from '../../../constants';

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultTitle, items, isOpen, shouldCloseOnItemClick = true, className = '', style = {}, onClose, onItemClick, renderItem } = props;

  const handleItemClick = useCallback(
    (item: IMenuItem) => {
      onItemClick(item);
      if (shouldCloseOnItemClick) {
        setTimeout(onClose, 150);
      }
    },
    [shouldCloseOnItemClick, onItemClick, onClose],
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toUpperCase() === 'ESCAPE') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  if (!isOpen || (isEmptyList(items) && isEmptyString(defaultTitle))) {
    return null;
  }

  if (isEmptyList(items)) {
    return (
      <p className={`${classes.defaultItem} ${className}`} style={style}>
        {defaultTitle}
      </p>
    );
  }

  return (
    <motion.ul variants={CONTENT_VARIANTS} className={`${classes.menu} ${className}`} style={style}>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} onItemClick={handleItemClick} renderItem={renderItem} className={classes.menuItem} />
      ))}
    </motion.ul>
  );
};

export default Menu;
