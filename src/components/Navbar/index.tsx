import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import ColourBlock from '../UI/ColourBlock';
import classes from './styles.module.scss';

const navbarVariants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: -2,
    opacity: 0,
  },
};

const Navbar: React.FC<Props> = () => {
  return (
    <ProjectPage containerClassName={classes.pageContainer}>
      <motion.nav variants={navbarVariants} className={classes.navbar}>
        <ul className={classes.navItems}>
          <li>Product</li>
          <li>Testimonials</li>
          <li>Pricing</li>
        </ul>
        <ul className={classes.navItems}>
          <li>Team</li>
          <li>Contact Us</li>
        </ul>
      </motion.nav>
      <QuestionDetails title='Navbar' containerClassName={classes.questionDetails} titleClassName={classes.questionTitle}>
        <p>
          You're given an HTML file for the top navigation bar of a website. The navigation bar consists of two unordered lists, containing three and
          two list items, respectively.
        </p>
        <p>Style this navigation bar as follows:</p>
        <ul>
          <li>
            The navigation bar should be a horizontal bar, spanning the entire width of its parent; all of its list items should be displayed in a
            single row.
          </li>
          <li>
            The first unordered list (containing Product, Testimonials, and Pricing) should appear on the far left side of the navigation bar. The
            second unordered list (containing Team and Contact Us) should appear on the far right side of the navigation bar.
          </li>
          <li>
            The navigation bar should have a background color of #265EF7
            <ColourBlock colour='#265EF7' />
            and a white
            <ColourBlock colour={COLORS.WHITE} />
            font color.
          </li>
          <li>
            The unordered lists should have no margin or padding. However, the individual list items should have vertical padding equal to their font
            size and horizontal padding equal to their font size multiplied by 1.5; their font size should be 16px.
          </li>
          <li>
            Hovering over a list item should change its background color to #1E87B5
            <ColourBlock colour='#1E87B5' />
            and the mouse cursor to a pointer.
          </li>
          <li>
            There should be a solid, #F4F5F6
            <ColourBlock colour={COLORS.LIGHT} />, 2px border separating the list items. However this border shouldn't appear on the right side of
            Pricing or on the left side of Team.
          </li>
          <li>The individual list items shouldn't have bullet points next to them.</li>
        </ul>
      </QuestionDetails>
    </ProjectPage>
  );
};

export default Navbar;
