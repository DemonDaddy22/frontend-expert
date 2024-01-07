import { useCallback, useReducer } from 'react';

interface IState<T> {
  value: T;
  history: T[];
  currentIndex: number;
}

interface IAction {
  type: string;
  value?: any;
}

const ACTION_TYPE = {
  STATE_UPDATE: 'STATE_UPDATE',
  STATE_GO_BACK: 'STATE_GO_BACK',
  STATE_GO_FORWARD: 'STATE_GO_FORWARD',
};

const reducer = <T>(state: IState<T>, action: IAction) => {
  const { type, value } = action;
  const { history, currentIndex } = state;

  switch (type) {
  case ACTION_TYPE.STATE_UPDATE:
    return {
      value,
      history: [...history, value],
      currentIndex: currentIndex + 1,
    };
  case ACTION_TYPE.STATE_GO_BACK: {
    const backIndex = currentIndex - 1;
    if (backIndex < 0) {
      return state;
    }
    return {
      value: history[backIndex],
      history,
      currentIndex: backIndex,
    };
  }
  case ACTION_TYPE.STATE_GO_FORWARD: {
    const forwardIndex = currentIndex + 1;
    if (forwardIndex >= history.length) {
      return state;
    }
    return {
      value: history[forwardIndex],
      history,
      currentIndex: forwardIndex,
    };
  }
  default:
    return state;
  }
};

const useStateWithHistory = <T>(initialState: T) => {
  const [state, dispatch] = useReducer(reducer, {
    value: initialState,
    history: typeof initialState === 'undefined' ? [] : [initialState],
    currentIndex: typeof initialState === 'undefined' ? -1 : 0,
  });

  const handleStateUpdate = useCallback((value: T) => {
    dispatch({ type: ACTION_TYPE.STATE_UPDATE, value });
  }, []);

  const handleStateGoBack = useCallback(() => {
    dispatch({ type: ACTION_TYPE.STATE_GO_BACK });
  }, []);

  const handleStateGoForward = useCallback(() => {
    dispatch({ type: ACTION_TYPE.STATE_GO_FORWARD });
  }, []);

  return [state.value, handleStateUpdate, handleStateGoBack, handleStateGoForward, state.history];
};

export default useStateWithHistory;
