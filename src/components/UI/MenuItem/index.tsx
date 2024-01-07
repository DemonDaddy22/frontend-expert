import React, { useCallback } from 'react';
import classes from './styles.module.scss';

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { item, className = '', style = {}, onItemClick, renderItem } = props;

  const renderMenuItem = useCallback(() => {
    if (renderItem && typeof renderItem === 'function') {
      return renderItem(item);
    }
    return <p className={classes.itemTitle}>{item.title}</p>;
  }, [JSON.stringify(item), renderItem]);

  if (!item) {
    return null;
  }

  return (
    <li
      className={`${classes.item} ${className}`}
      style={style}
      onClick={() => {
        onItemClick(item);
      }}
    >
      {renderMenuItem()}
    </li>
  );
};

export default MenuItem;
