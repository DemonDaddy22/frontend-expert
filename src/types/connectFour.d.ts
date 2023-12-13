interface IConnectFourBoardState {
  board: Array<Array<number | null>>;
  isPlayerOneTurn: boolean;
  isGameOver: boolean;
}

interface IConnectFourBoardAction {
  type: string;
  value?: any;
}
