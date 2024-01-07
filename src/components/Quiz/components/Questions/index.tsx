import React, { useCallback, useMemo, useState } from 'react';
import classes from './styles.module.scss';
import useFetch from '../../../../hooks/useFetch';
import { QUIZ_CONFIG } from '../../../../constants';
import { isEmptyObject } from '../../../../utils';
import Button from '../../../UI/Button';
import Question from '../Question';

const Questions: React.FC<Props> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAttempt, setQuestionAttempt] = useState<Record<string, string>>({});

  const { responseJSON } = useFetch(QUIZ_CONFIG.API_URI, { mode: 'cors' });
  const results: IQuizQuestion[] = responseJSON?.results ?? [];
  const currentQuestion = results?.[currentQuestionIndex] ?? {};

  const answers = useMemo(() => {
    if (!isEmptyObject(currentQuestion)) {
      const incorrectAnswers = currentQuestion.incorrect_answers;
      const correctAnswer = currentQuestion.correct_answer;
      const randomIndexToInsert = Math.round(Math.random() * incorrectAnswers.length);
      const answers = [...incorrectAnswers];
      answers.splice(randomIndexToInsert, 0, correctAnswer);
      return answers;
    }
    return [];
  }, [JSON.stringify(currentQuestion)]);

  const handleAnswerSelection = useCallback(
    (selectedAnswer: string) => {
      setQuestionAttempt((prevAttempt) => {
        if (currentQuestionIndex in prevAttempt) {
          return prevAttempt;
        }
        return {
          ...prevAttempt,
          [currentQuestionIndex]: selectedAnswer,
        };
      });
    },
    [currentQuestionIndex],
  );

  return !isEmptyObject(currentQuestion) ? (
    <div className={classes.container}>
      <Question
        question={currentQuestion.question}
        correctAnswer={currentQuestion.correct_answer}
        difficulty={currentQuestion.difficulty}
        category={currentQuestion.category}
        attempt={questionAttempt[currentQuestionIndex]}
        answers={answers}
        onOptionSelect={handleAnswerSelection}
      />
      <div className={classes.buttonsContainer}>
        <Button
          disabled={currentQuestionIndex <= 0}
          onClick={() => {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
          }}
        >
          Back
        </Button>
        <Button
          disabled={currentQuestionIndex >= results.length - 1}
          onClick={() => {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  ) : null;
};

export default Questions;
