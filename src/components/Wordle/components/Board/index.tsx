import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classes from './styles.module.scss';
import { words } from '../../data';
import { createListOfSize, getRandomListIndex } from '../../../../utils';
import { WORDLE_CONFIG } from '../../../../constants';
import Row from '../Row';

const Board: React.FC<Props> = () => {
  const word = useRef(words[getRandomListIndex(words)]);

  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [guesses, setGuesses] = useState<Array<string | null>>(
    createListOfSize(WORDLE_CONFIG.BOARD_SIZE).map(() => null)
  );

  const currentIndex = useMemo(() => {
    const index = guesses.findIndex((guess) => guess === null);
    return index;
  }, [JSON.stringify(guesses)]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    event.stopPropagation();
    if (currentIndex < 0 || isGameOver) {
      return;
    }

    const key = event.key;
    if (key === 'Backspace' && currentGuess.length) {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
    } else if (key === 'Enter' && currentGuess.length === WORDLE_CONFIG.ROW_SIZE) {
      setGuesses((prevGuesses) => {
        const newGuesses = [...prevGuesses];
        newGuesses.splice(currentIndex, 1, currentGuess);
        if (word.current === currentGuess) {
          setIsGameOver(true);
        }
        setCurrentGuess('');
        return newGuesses;
      });
    } else if (WORDLE_CONFIG.ALPHABET_REGEX.test(key) && currentGuess.length < WORDLE_CONFIG.ROW_SIZE) {
      setCurrentGuess((prevGuess) => `${prevGuess}${key}`.toUpperCase());
    }
  }, [currentIndex, currentGuess, isGameOver]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className={classes.board}>
      {guesses.map((guess, index) => (
        <Row
          key={`row-${index}`}
          word={word.current}
          index={index}
          currentIndex={currentIndex}
          guess={(currentIndex === index ? currentGuess : (guess || '')).padEnd(WORDLE_CONFIG.ROW_SIZE)}
        />
      ))}
    </div>
  );
};

export default Board;
