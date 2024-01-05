import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import Divider from '../../../UI/Divider';
import { QUESTIONS_INFO } from '../../../../constants/questions';

// TODO - set active list item based on current question opened

const QuestionsMenu: React.FC<Props> = () => {
  return (
    <aside className={classes.menu}>
      <h2 className={classes.title}>Questions</h2>
      <Divider />
      <ul className={classes.menuItems}>
        {QUESTIONS_INFO.map((question) => (
          <li key={question.id} className={classes.menuListItem}>
            <Link to={`fe/exercise/${question.id}`} className={classes.menuItem}>{question.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default QuestionsMenu;
