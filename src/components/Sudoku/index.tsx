import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import Input from '../UI/Input';
import './vanillaStyles.css';
import Divider from '../UI/Divider';
import { CONTENT_VARIANTS } from '../../constants';

const Sudoku: React.FC<Props> = () => {
  const getGivenNumberCell = useCallback((value: number) => <td className={`${classes.cell} ${classes.givenNumber} givenCell`}>{value}</td>, []);

  const getCellToFill = useCallback(
    () => (
      <td className={classes.cell}>
        <span className={`${classes.candidates} cellCandidates`}></span>
        <span className={`${classes.value} cellValue`}></span>
      </td>
    ),
    [],
  );

  const handleCellSelection = useCallback((event: any) => {
    const cell = event.currentTarget;
    if (cell?.classList.contains('givenCell')) {
      return;
    }

    document.querySelector('.cellSelected')?.classList?.remove('cellSelected');
    cell.classList.add('cellSelected');
  }, []);

  const handleNumberControlSelection = useCallback((event: any) => {
    const selectedCell = document.querySelector('.cellSelected');
    if (!selectedCell) {
      return;
    }

    const candidateSwitch: any = document.querySelector('#switch');
    const isCandidateMove = candidateSwitch?.checked;
    const cellContent: string = event.currentTarget?.textContent;

    if (!isCandidateMove) {
      const cellValue = selectedCell?.querySelector('.cellValue');
      if (cellValue) {
        cellValue.textContent = cellContent;
      }
    } else {
      const candidates = selectedCell?.querySelector('.cellCandidates');
      const candidatesContent = candidates?.textContent ?? '';
      const candidateMoves = candidatesContent.split('');
      const candidateIndex = candidateMoves.indexOf(cellContent);
      if (candidateIndex < 0) {
        candidateMoves.push(cellContent);
      } else {
        candidateMoves.splice(candidateIndex, 1);
      }
      candidateMoves.sort();
      if (candidates) {
        candidates.textContent = candidateMoves.join('');
      }
    }
  }, []);

  useEffect(() => {
    const cells = document.querySelectorAll('td');
    const numberControls = document.querySelectorAll('.control');

    cells.forEach((cell) => {
      cell.addEventListener('click', handleCellSelection);
    });
    numberControls.forEach((control) => {
      control.addEventListener('click', handleNumberControlSelection);
    });

    return () => {
      cells.forEach((cell) => {
        cell.removeEventListener('click', handleCellSelection);
      });
      numberControls.forEach((control) => {
        control.removeEventListener('click', handleNumberControlSelection);
      });
    };
  }, [handleCellSelection, handleNumberControlSelection]);

  return (
    <ProjectPage>
      <QuestionDetails
        title='Sudoku'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          You're given HTML and CSS files for a Sudoku game based on{' '}
          <a href='https://www.nytimes.com/puzzles/sudoku'>The New York Times Number Puzzles</a>, and you need to make the game functional using
          JavaScript.
        </p>
        <p>
          Sudoku is a popular puzzle game, where the goal is to fill in every cell of a 9x9 grid with the numbers one through nine such that no
          duplicates appear in any row, column, or 3x3 subgrid.
        </p>
        <p>The provided board contains two types of cells: given numbers and standard cells:</p>
        <ul>
          <li>
            Given numbers have the <span className={classes.questionDescriptionHighlight}>given-number</span> class, are grey with a pre-filled
            number, and should have no functionality.
          </li>
          <li>
            Standard cells have two child spans with classes of <span className={classes.questionDescriptionHighlight}>candidates</span> and{' '}
            <span className={classes.questionDescriptionHighlight}>value</span>, respectively, and they're white. When a standard cell is clicked on,
            it should become selected (i.e., the cell should have the <span className={classes.questionDescriptionHighlight}>selected</span> class).
            Only one cell should be selectable at a time (i.e., selecting a cell should unselect the previously selected cell).
          </li>
        </ul>
        <p>
          To the right of the Sudoku board is a provided set of controls. These controls include buttons with the numbers one through nine as well as
          a toggle button (which is an HTML checkbox input field). The controls should have the following functionality:
        </p>
        <ul>
          <li>
            When the <span className={classes.questionDescriptionHighlight}>#candidate-switch</span> checkbox is unchecked (i.e., set to "Normal
            Move"), clicking on any of the number control buttons should place that number in the{' '}
            <span className={classes.questionDescriptionHighlight}>.value</span> span of the selected cell.
          </li>
          <li>
            The <span className={classes.questionDescriptionHighlight}>.candidates</span> spans of standard cells should act as lists of candidate
            moves (potential moves) for each cell. When the <span className={classes.questionDescriptionHighlight}>#candidate-switch</span> checkbox
            is checked (i.e., set to "Candidate Move"), clicking on any of the number control buttons should toggle that number in the{' '}
            <span className={classes.questionDescriptionHighlight}>.candidates</span> span of the selected cell. In other words, if the{' '}
            <span className={classes.questionDescriptionHighlight}>.candidates</span> span already contained the number, it should be removed;
            otherwise it should be added.
          </li>
          <li>
            The contents of the <span className={classes.questionDescriptionHighlight}>.candidates</span> spans should always be sorted in ascending
            order, and there shouldn't be duplicate numbers in an individual candidates list. There should also be no spaces or other delimiters
            between numbers in a candidates list.
          </li>
          <li>If no cell is selected, clicking the number controls should have no effect.</li>
        </ul>
      </QuestionDetails>
      <Divider />
      <motion.section variants={CONTENT_VARIANTS} className={classes.solutionContainer}>
        <div className={classes.sudokuContainer}>
          <table className={classes.board} role='grid'>
            <colgroup span={3} className={classes.boardColumnGroup}></colgroup>
            <colgroup span={3} className={classes.boardColumnGroup}></colgroup>
            <colgroup span={3} className={classes.boardColumnGroup}></colgroup>
            <tbody>
              <tr className={classes.boardRow}>
                {getGivenNumberCell(5)}
                {getGivenNumberCell(7)}
                {getCellToFill()}

                {getGivenNumberCell(1)}
                {getGivenNumberCell(8)}
                {getCellToFill()}

                {getCellToFill()}
                {getCellToFill()}
                {getGivenNumberCell(3)}
              </tr>
              <tr className={classes.boardRow}>
                {getCellToFill()}
                {getGivenNumberCell(8)}
                {getGivenNumberCell(6)}

                {getCellToFill()}
                {getCellToFill()}
                {getCellToFill()}

                {getGivenNumberCell(4)}
                {getCellToFill()}
                {getGivenNumberCell(2)}
              </tr>
              <tr className={classes.boardRow}>
                {getCellToFill()}
                {getGivenNumberCell(9)}
                {getGivenNumberCell(2)}

                {getGivenNumberCell(6)}
                {getGivenNumberCell(7)}
                {getCellToFill()}

                {getGivenNumberCell(8)}
                {getCellToFill()}
                {getCellToFill()}
              </tr>
              <tr className={classes.boardRow}>
                {getCellToFill()}
                {getGivenNumberCell(1)}
                {getCellToFill()}

                {getGivenNumberCell(8)}
                {getGivenNumberCell(6)}
                {getGivenNumberCell(3)}

                {getCellToFill()}
                {getGivenNumberCell(4)}
                {getGivenNumberCell(7)}
              </tr>
              <tr className={classes.boardRow}>
                {getGivenNumberCell(4)}
                {getGivenNumberCell(2)}
                {getCellToFill()}

                {getCellToFill()}
                {getGivenNumberCell(1)}
                {getCellToFill()}

                {getCellToFill()}
                {getCellToFill()}
                {getCellToFill()}
              </tr>
              <tr className={classes.boardRow}>
                {getCellToFill()}
                {getCellToFill()}
                {getGivenNumberCell(7)}

                {getCellToFill()}
                {getGivenNumberCell(2)}
                {getCellToFill()}

                {getGivenNumberCell(1)}
                {getGivenNumberCell(9)}
                {getCellToFill()}
              </tr>
              <tr className={classes.boardRow}>
                {getGivenNumberCell(7)}
                {getCellToFill()}
                {getGivenNumberCell(3)}

                {getGivenNumberCell(2)}
                {getGivenNumberCell(9)}
                {getGivenNumberCell(8)}

                {getGivenNumberCell(5)}
                {getGivenNumberCell(1)}
                {getGivenNumberCell(6)}
              </tr>
              <tr className={classes.boardRow}>
                {getCellToFill()}
                {getCellToFill()}
                {getCellToFill()}

                {getGivenNumberCell(5)}
                {getCellToFill()}
                {getCellToFill()}

                {getCellToFill()}
                {getGivenNumberCell(8)}
                {getGivenNumberCell(4)}
              </tr>
              <tr className={classes.boardRow}>
                {getGivenNumberCell(8)}
                {getGivenNumberCell(5)}
                {getCellToFill()}

                {getGivenNumberCell(7)}
                {getCellToFill()}
                {getGivenNumberCell(6)}

                {getCellToFill()}
                {getCellToFill()}
                {getGivenNumberCell(9)}
              </tr>
            </tbody>
          </table>
          <div className={classes.controls}>
            <div className={classes.numberControls} id='number-controls'>
              <div className={`${classes.numberControl} control`}>1</div>
              <div className={`${classes.numberControl} control`}>2</div>
              <div className={`${classes.numberControl} control`}>3</div>
              <div className={`${classes.numberControl} control`}>4</div>
              <div className={`${classes.numberControl} control`}>5</div>
              <div className={`${classes.numberControl} control`}>6</div>
              <div className={`${classes.numberControl} control`}>7</div>
              <div className={`${classes.numberControl} control`}>8</div>
              <div className={`${classes.numberControl} control`}>9</div>
            </div>
            <Input id='switch' type='checkbox' className={classes.candidateSwitch} aria-label='Is candidate move' />
          </div>
        </div>
      </motion.section>
    </ProjectPage>
  );
};

export default Sudoku;
