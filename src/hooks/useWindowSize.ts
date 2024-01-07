import { useEffect, useReducer } from 'react';
import { throttle } from 'lodash';

const THROTTLE_DELAY = 500;

const ACTION_TYPE = Object.freeze({
  UPDATE_HEIGHT: 'UPDATE_HEIGHT',
  UPDATE_WIDTH: 'UPDATE_WIDTH',
});

interface IState {
  width: number;
  height: number;
}

interface IAction {
  value: number;
  type: string;
}

const reducer = (state: IState, action: IAction) => {
  const { value, type } = action;

  switch (type) {
  case ACTION_TYPE.UPDATE_HEIGHT:
    return {
      ...state,
      height: value,
    };
  case ACTION_TYPE.UPDATE_WIDTH:
    return {
      ...state,
      width: value,
    };
  default:
    return state;
  }
};

const useWindowSize = () => {
  const [state, dispatch] = useReducer(reducer, { width: 0, height: 0 });

  useEffect(() => {
    const handleWindowResize = throttle(() => {
      dispatch({ value: window.innerHeight, type: ACTION_TYPE.UPDATE_HEIGHT });
      dispatch({ value: window.innerWidth, type: ACTION_TYPE.UPDATE_WIDTH });
    }, THROTTLE_DELAY);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { ...state };
};

export default useWindowSize;
