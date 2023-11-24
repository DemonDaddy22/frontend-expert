import { useEffect, useReducer } from 'react';

interface IUseFetchState {
  responseJSON: { [key: string]: any } | null;
  isLoading: boolean;
  error: any;
}

interface IAction {
  type: string;
  value: any;
}

const reducer = (state: IUseFetchState, action: IAction) => {
  const { type, value } = action;

  switch (type) {
    case 'setResponseJSON':
      return {
        ...state,
        responseJSON: value,
        error: null,
      };
    case 'setIsLoading':
      return {
        ...state,
        isLoading: value,
      };
    case 'setError':
      return {
        ...state,
        error: value,
      };
    default:
      return state;
  }
};

const useFetch = (url: string) => {
  const [state, dispatch] = useReducer(reducer, {
    responseJSON: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchResponse = async () => {
      dispatch({ type: 'setIsLoading', value: true });
      try {
        const response = await fetch(url, { signal });
        const json = await response.json();
        dispatch({ type: 'setResponseJSON', value: json });
      } catch (err) {
        dispatch({ type: 'setError', value: err });
      } finally {
        dispatch({ type: 'setIsLoading', value: false });
      }
    };

    fetchResponse();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { ...state };
};

export default useFetch;
