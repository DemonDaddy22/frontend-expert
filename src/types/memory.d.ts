interface IMemoryBoardState {
  board: Array<string>;
  validMovesCount: number;
  moves: {
    [key: string]: Array<number>;
  };
}

interface IMemoryBoardAction {
  type: string;
  value?: any;
}
