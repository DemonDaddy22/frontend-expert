import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import Divider from '../UI/Divider';
import { CONTENT_VARIANTS } from '../../constants';

const TierList: React.FC<Props> = () => {
  const unrankedDropZone = useRef<HTMLDivElement>(null);
  const draggedItem = useRef<HTMLDivElement | null>(null);

  const handleItemDoubleClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const item = event.currentTarget;
    const parent = item.parentElement;
    if (parent !== unrankedDropZone.current) {
      unrankedDropZone.current?.appendChild(item);
    }
  }, []);

  const handleItemDragStart = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const item = event.currentTarget;
    draggedItem.current = item;
  }, []);

  const handleItemDrop = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const dropZone = event.currentTarget;
    if (draggedItem.current && draggedItem.current?.parentElement !== dropZone) {
      dropZone?.appendChild(draggedItem.current);
    }
  }, []);

  const handleItemDragOver = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event?.preventDefault();
  }, []);

  return (
    <ProjectPage>
      <QuestionDetails
        title='Tier List'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>You're given HTML and CSS files for a simple tier list, and you need to make the tier list functional using JavaScript.</p>
        <p>
          A tier list is a system that allows you to rank items from best to worst. The provided tier list has three tiers (A, B, and C) and three
          items (colored squares), which start out in an unranked section.
        </p>
        <p>The tier list should have the following functionality:</p>
        <ul>
          <li>
            Each element with the <span className={classes.questionDescriptionHighlight}>item</span> class (each colored square) should be draggable.
          </li>
          <li>
            If a colored square is drag-and-dropped in an element with the <span className={classes.questionDescriptionHighlight}>drop-zone</span>{' '}
            class (one of the grey drop zones), the square should be appended to that element. If the square was already in that drop zone or if the
            square is dropped anywhere else on the page, nothing should happen (the square should remain where it was).
          </li>
          <li>
            If a colored square is double-clicked, it should be appended to the element with the{' '}
            <span className={classes.questionDescriptionHighlight}>unranked-drop-zone</span> id (the grey drop zone in the unranked section). If the
            item was already in the unranked drop zone, nothing should happen (the square should remain where it was).
          </li>
        </ul>
        <p>Your solution should use the standard browser drag-and-drop API.</p>
      </QuestionDetails>
      <Divider />
      <motion.section variants={CONTENT_VARIANTS} className={classes.solutionContainer}>
        <div className={classes.tier}>
          <h3 className={classes.tierTitle}>A Tier</h3>
          <div className={classes.dropZone} onDrop={handleItemDrop} onDragOver={handleItemDragOver}></div>
        </div>
        <div className={classes.tier}>
          <h3 className={classes.tierTitle}>B Tier</h3>
          <div className={classes.dropZone} onDrop={handleItemDrop} onDragOver={handleItemDragOver}></div>
        </div>
        <div className={classes.tier}>
          <h3 className={classes.tierTitle}>C Tier</h3>
          <div className={classes.dropZone} onDrop={handleItemDrop} onDragOver={handleItemDragOver}></div>
        </div>
        <div className={`${classes.tier} ${classes.tierUnranked}`}>
          <h3 className={classes.tierTitle}>Unranked</h3>
          <div className={classes.dropZone} ref={unrankedDropZone} onDrop={handleItemDrop} onDragOver={handleItemDragOver}>
            <div
              className={`${classes.item} ${classes.itemBlue}`}
              draggable
              onDoubleClick={handleItemDoubleClick}
              onDragStart={handleItemDragStart}
            />
            <div className={`${classes.item} ${classes.itemRed}`} draggable onDoubleClick={handleItemDoubleClick} onDragStart={handleItemDragStart} />
            <div
              className={`${classes.item} ${classes.itemGreen}`}
              draggable
              onDoubleClick={handleItemDoubleClick}
              onDragStart={handleItemDragStart}
            />
          </div>
        </div>
      </motion.section>
    </ProjectPage>
  );
};

export default TierList;
