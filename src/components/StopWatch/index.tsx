import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Play from '../Icons/Play';
import Reset from '../Icons/Reset';
import Stop from '../Icons/Stop';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import IconButton from '../UI/IconButton';
import classes from './styles.module.scss';
import { CONTENT_VARIANTS, NO_OP } from '../../constants';
import Divider from '../UI/Divider';
import { ThemeContext } from '../../context/ThemeContext';

const CONTROL_BUTTON_SIZE = 28;

let watchTimerId: NodeJS.Timeout;
let startTime = Date.now();

const StopWatch: React.FC<Props> = () => {
  const { getThemeValue } = useContext(ThemeContext);

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerText, setTimerText] = useState('00:00:000');
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startControlButtonRef = useRef<HTMLButtonElement>(null);
  const stopControlButtonRef = useRef<HTMLButtonElement>(null);
  const resetControlButtonRef = useRef<HTMLButtonElement>(null);

  const handleTimerStop = useCallback(() => {
    if (startControlButtonRef.current && resetControlButtonRef.current && stopControlButtonRef.current) {
      startControlButtonRef.current.disabled = false;
      stopControlButtonRef.current.disabled = true;
      resetControlButtonRef.current.disabled = false;
      clearInterval(watchTimerId);
      setIsTimerRunning(false);
      setTimeElapsed(Date.now() - startTime);
    }
  }, []);

  const handleSetTimer = useCallback(() => {
    let time = Date.now() - startTime + timeElapsed;
    const milliseconds = `${time % 1000}`.padStart(3, '0');
    time = Math.floor(time / 1000);
    const seconds = `${time % 60}`.padStart(2, '0');
    time = Math.floor(time / 60);
    const minutes = `${time % 60}`.padStart(2, '0');
    time = Math.floor(time / 24);
    setTimerText(`${minutes}:${seconds}:${milliseconds}`);

    if (time > 0) {
      handleTimerStop();
      if (startControlButtonRef.current) {
        startControlButtonRef.current.disabled = true;
      }
    }
  }, [timeElapsed, handleTimerStop]);

  const handleTimerStart = useCallback(() => {
    if (startControlButtonRef.current && resetControlButtonRef.current && stopControlButtonRef.current) {
      startControlButtonRef.current.disabled = true;
      stopControlButtonRef.current.disabled = false;
      resetControlButtonRef.current.disabled = true;
      startTime = Date.now();
      setIsTimerRunning(true);
      watchTimerId = setInterval(handleSetTimer, 1);
    }
  }, [handleSetTimer]);

  const handleTimerReset = useCallback(() => {
    if (startControlButtonRef.current && resetControlButtonRef.current && stopControlButtonRef.current) {
      startControlButtonRef.current.disabled = false;
      resetControlButtonRef.current.disabled = true;
      stopControlButtonRef.current.disabled = true;
      setIsTimerRunning(false);
      setTimeElapsed(0);
      setTimerText('00:00:000');
    }
  }, []);

  useEffect(() => {
    if (stopControlButtonRef.current && resetControlButtonRef.current) {
      stopControlButtonRef.current.disabled = true;
      resetControlButtonRef.current.disabled = true;
    }
  }, []);

  return (
    <ProjectPage>
      <QuestionDetails
        title='Stop Watch'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          You're given HTML and CSS files for a simple stopwatch, and you need to make the stopwatch functional using
          JavaScript.
        </p>
        <p>
          The stopwatch has a timer, which is meant to be controlled by the stopwatch's three buttons: a start button, a
          stop button, and a reset button. The stopwatch starts out in its idle state, with the timer at{' '}
          <span className={classes.questionDescriptionHighlight}>00:00:00</span> and the start button as the only
          enabled button.
        </p>
        <p>The stopwatch should have the following functionality:</p>
        <ul>
          <li>
            When the start button is pressed from the idle state, the timer should start counting up from{' '}
            <span className={classes.questionDescriptionHighlight}>00:00:00</span>.
          </li>
          <li>
            While the timer is counting up, the stop button should be enabled, and the start and reset buttons should be
            disabled.
          </li>
          <li>When the stop button is pressed, the timer should pause.</li>
          <li>
            While the timer is paused, the stop button should be disabled, and the start and reset buttons should be
            enabled.
          </li>
          <li>
            When the start button is pressed from the paused state, the timer should resume counting up from its
            previous time.
          </li>
          <li>
            When the reset button is pressed from the paused state, the entire stopwatch should go back to its original
            idle state.
          </li>
          <li>
            The timer should be in the format{' '}
            <span className={classes.questionDescriptionHighlight}>minutes:seconds:milliseconds</span>, with minutes and
            seconds having two digits and milliseconds having three digits. For example, if 2 minutes, 15 seconds, and
            350 milliseconds have elapsed, the timer should read{' '}
            <span className={classes.questionDescriptionHighlight}>02:15:350</span>.
          </li>
          <li>
            You don't need to handle times greater than{' '}
            <span className={classes.questionDescriptionHighlight}>59:59:999</span>.
          </li>
        </ul>
      </QuestionDetails>
      <Divider />
      <motion.main variants={CONTENT_VARIANTS} className={classes.solutionContainer}>
        <section className={`${classes.watch} ${isTimerRunning && classes.watchGlow}`}>
          <h4 className={classes.timer}>{timerText}</h4>
          <div className={classes.controls}>
            <IconButton
              ref={startControlButtonRef}
              onClick={!startControlButtonRef.current?.disabled ? handleTimerStart : NO_OP}
              className={classes.controlStart}
              size={CONTROL_BUTTON_SIZE * 1.5}
            >
              <Play color={getThemeValue('green1')} height={CONTROL_BUTTON_SIZE} width={CONTROL_BUTTON_SIZE} />
            </IconButton>
            <IconButton
              ref={stopControlButtonRef}
              onClick={!stopControlButtonRef.current?.disabled ? handleTimerStop : NO_OP}
              className={classes.controlStop}
              size={CONTROL_BUTTON_SIZE * 1.5}
            >
              <Stop color={getThemeValue('red1')} height={CONTROL_BUTTON_SIZE} width={CONTROL_BUTTON_SIZE} />
            </IconButton>
            <IconButton
              ref={resetControlButtonRef}
              onClick={!resetControlButtonRef.current?.disabled ? handleTimerReset : NO_OP}
              className={classes.controlReset}
              size={CONTROL_BUTTON_SIZE * 1.5}
            >
              <Reset color={getThemeValue('blue1')} height={CONTROL_BUTTON_SIZE} width={CONTROL_BUTTON_SIZE} />
            </IconButton>
          </div>
        </section>
      </motion.main>
    </ProjectPage>
  );
};

export default StopWatch;
