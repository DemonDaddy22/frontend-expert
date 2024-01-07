import React, { useCallback, useContext } from 'react';
import classes from './styles.module.scss';
import Home from '../Icons/Home';
import GitHub from '../Icons/GitHub';
import User from '../Icons/User';
import Light from '../Icons/Light';
import { PROJECT_NAV_ITEM_COLORS } from '../../constants/theme';
import { THEME, URLS } from '../../constants';
import { ThemeContext } from '../../context/ThemeContext';
import Dark from '../Icons/Dark';

const ProjectNavbar: React.FC<Props> = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleNavigation = useCallback((url: string, openInNewTab: boolean = true) => {
    if (openInNewTab) {
      window.open(url, '__blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  }, []);

  return (
    <nav className={classes.menu}>
      <ul className={classes.menuItems}>
        <li className={classes.menuItem}>
          <button
            className={classes.menuItemButton}
            onClick={() => {
              handleNavigation(URLS.HOME, false);
            }}
          >
            <Home color={PROJECT_NAV_ITEM_COLORS.HOME} />
          </button>
        </li>
        <li className={classes.menuItem}>
          <button
            className={classes.menuItemButton}
            onClick={() => {
              handleNavigation(URLS.GITHUB);
            }}
          >
            <GitHub color={PROJECT_NAV_ITEM_COLORS.GITHUB} />
          </button>
        </li>
        <li className={classes.menuItem}>
          <button
            className={classes.menuItemButton}
            onClick={() => {
              handleNavigation(URLS.PORTFOLIO);
            }}
          >
            <User color={PROJECT_NAV_ITEM_COLORS.USER} />
          </button>
        </li>
        <li className={classes.menuItem}>
          <button className={classes.menuItemButton} onClick={toggleTheme}>
            {theme === THEME.LIGHT ? <Light color={PROJECT_NAV_ITEM_COLORS.LIGHT} /> : <Dark color={PROJECT_NAV_ITEM_COLORS.DARK} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectNavbar;
