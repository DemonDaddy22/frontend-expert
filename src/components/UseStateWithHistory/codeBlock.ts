export const sampleUsage = `const [
  value, // 10
  setValue, // function
  goBack, // function
  goForward, // function
  history // [10]
] = useStateWithHistory(10);

setValue(15); // value=15, history=[10, 15]
setValue(20); // value=20, history=[10, 15, 20]
goBack(); // value=15 history=[10, 15, 20]
goBack(); // value=10, history=[10, 15, 20]
goBack(); // value=10, history=[10, 15, 20]
goForward(); // value=15, history=[10, 15, 20]
setValue(25); // value=25, history=[10, 15, 20, 25]
setValue(30); // value=30, history=[10, 15, 20, 25, 30]
goBack(); // value=25, history=[10, 15, 20, 25, 30]
goForward(); // value=30, history=[10, 15, 20, 25, 30]
goForward(); // value=30, history=[10, 15, 20, 25, 30]
`;

export const solutionCode = `// useStateWithHistory hook

import { useCallback, useReducer } from 'react';

interface IState<T> {
  value: T;
  history: Array<T>;
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
    case ACTION_TYPE.STATE_GO_BACK:
      const backIndex = currentIndex - 1;
      if (backIndex < 0) {
        return state;
      }
      return {
        value: history[backIndex],
        history,
        currentIndex: backIndex,
      };
    case ACTION_TYPE.STATE_GO_FORWARD:
      const forwardIndex = currentIndex + 1;
      if (forwardIndex >= history.length) {
        return state;
      }
      return {
        value: history[forwardIndex],
        history,
        currentIndex: forwardIndex,
      };
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

  return [
    state.value,
    handleStateUpdate,
    handleStateGoBack,
    handleStateGoForward,
    state.history,
  ];
};

export default useStateWithHistory;
`;
