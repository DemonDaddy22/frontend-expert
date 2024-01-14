import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import Divider from '../../../UI/Divider';
import { QUESTIONS_INFO } from '../../../../constants/questions';
import useWindowSize from '../../../../hooks/useWindowSize';
import { CONTENT_VARIANTS, MENU_BUTTON_SIZE, RESPONSIVE_BREAKPOINT_WIDTH } from '../../../../constants';
import IconButton from '../../../UI/IconButton';
import Menu from '../../../Icons/Menu';
import Close from '../../../Icons/Close';

const menuContainerDesktopVariants = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
  hidden: {},
};

const menuContainerVariants = {
  visible: {
    opacity: 1,
    height: '100%',
    transition: {
      staggerChildren: 0.1, delayChildren: 0.5, when: 'beforeChildren' 
    },
  },
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.4, staggerDirection: -1, when: 'afterChildren' 
    },
  },
};

const menuVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05, delayChildren: 0.1, delay: 0.2 
    }, 
  },
  hidden: { transition: { staggerChildren: 0.01, staggerDirection: -1 } },
};

const menuItemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000 } },
  },
  hidden: {
    y: 5,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

const QuestionsMenu: React.FC<Props> = () => {
  const { width } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(width >= RESPONSIVE_BREAKPOINT_WIDTH);

  const MenuButton = useMemo(() => (isOpen ? Close : Menu), [isOpen]);

  const animateVariant = useMemo(() => {
    if (isDesktop) {
      return 'visible';
    }
    return isOpen ? 'visible' : 'hidden';
  }, [isDesktop, isOpen]);

  useEffect(() => {
    setIsDesktop(width >= RESPONSIVE_BREAKPOINT_WIDTH);
  }, [width]);

  return (
    <motion.div initial='hidden' animate={animateVariant}>
      <div className={classes.menuButton}>
        <IconButton size={MENU_BUTTON_SIZE} onClick={() => { setIsOpen((prevValue) => !prevValue); }}>
          <MenuButton width={MENU_BUTTON_SIZE * 0.6} height={MENU_BUTTON_SIZE * 0.6} />
        </IconButton>
      </div>
      <motion.aside variants={isDesktop ? menuContainerDesktopVariants : menuContainerVariants} className={classes.menu}>
        <motion.h2 variants={CONTENT_VARIANTS} className={classes.title}>
          Questions
        </motion.h2>
        <Divider />
        <motion.ul variants={menuVariants} className={classes.menuItems}>
          {QUESTIONS_INFO.map((question) => (
            <motion.li variants={menuItemVariants} key={question.id} className={classes.menuListItem}>
              <NavLink to={`fe/exercise/${question.id}`} className={({ isActive }) => (isActive ? classes.menuItemActive : classes.menuItem)}>
                {question.name}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </motion.aside>
    </motion.div>
  );
};

export default QuestionsMenu;
