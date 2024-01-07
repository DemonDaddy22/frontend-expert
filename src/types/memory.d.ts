interface IMemoryBoardState {
  board: string[];
  validMovesCount: number;
  moves: Record<string, number[]>;
}

interface IMemoryBoardAction {
  type: string;
  value?: any;
}
