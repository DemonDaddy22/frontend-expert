import React, { useCallback } from 'react';
import classes from './styles.module.scss';

const Row: React.FC<IWordleRowProps> = ({ currentIndex, index, guess, word }) => {
  const getBoxClassName = useCallback((letter: string, letterIndex: number) => {
    const baseClassName = classes.box;
    if (currentIndex >= 0 && currentIndex <= index) {
      return baseClassName;
    }
    if (guess[letterIndex] === word[letterIndex]) {
      return `${baseClassName} ${classes.boxCorrect}`;
    } else {
      const isLetterPresent = word.includes(letter);
      return `${baseClassName} ${isLetterPresent ? classes.boxClose : classes.boxIncorrect}`;
    }
  }, [currentIndex, index, guess, word]);

  return (
    <div className={classes.row}>
      {guess.split('').map((letter, letterIndex) => (
        <div className={getBoxClassName(letter, letterIndex)} key={`letter-${index}-${letterIndex}`}>
          {letter}
        </div>
      ))}
    </div>
  );
};

export default Row;
