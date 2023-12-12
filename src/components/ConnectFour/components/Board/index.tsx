import React, { useReducer } from 'react';
import classes from './styles.module.scss';
import { createListOfSize } from '../../../../utils';
import { CONNECT_FOUR_CONFIG } from '../../../../constants';
import { ButtonWhite } from '../../../UI/Button';

const ACTION_TYPE = Object.freeze({
  UPDATE_BOARD: 'UPDATE_BOARD',
  UPDATE_IS_P1_TURN: 'UPDATE_IS_P1_TURN',
  UPDATE_IS_GAME_OVER: 'UPDATE_IS_GAME_OVER',
  RESET_BOARD: 'RESET_BOARD',
});

const INITIAL_STATE: IConnectFourBoardState = {
  isPlayerOneTurn: true,
  isGameOver: false,
  board: createListOfSize(CONNECT_FOUR_CONFIG.MAX_COLS).map(() =>
    createListOfSize(CONNECT_FOUR_CONFIG.MAX_ROWS).map(() => null)
  ),
};

const reducer = (state: IConnectFourBoardState, action: IConnectFourBoardAction) => {
  const { type, value } = action;

  switch (type) {
    case ACTION_TYPE.UPDATE_BOARD:
      return {
        ...state,
        board: value,
      };
    case ACTION_TYPE.UPDATE_IS_P1_TURN:
      return {
        ...state,
        isPlayerOneTurn: value,
      };
    case ACTION_TYPE.UPDATE_IS_GAME_OVER:
      return {
        ...state,
        isGameOver: value,
      };
    case ACTION_TYPE.RESET_BOARD:
    default:
      return INITIAL_STATE;
  }
};

const Board: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { isPlayerOneTurn, isGameOver, board } = state;

  return (
    <div className={classes.game}>
      {isGameOver && <h1 className={classes.title}>Player {isPlayerOneTurn ? '1' : '2'} Wins!</h1>}
      <div className={classes.board}>
        {board.map((column: Array<null | number>, colIndex: number) => (
          <div className={classes.column} key={`column-${colIndex}`}>
            {column.map((item, index) => (
              <div className={classes.tile} key={`tile-${colIndex}-${index}`}>
                <div className={classes.player}></div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {isGameOver && <ButtonWhite onClick={() => dispatch({ type: ACTION_TYPE.RESET_BOARD })}>Restart</ButtonWhite>}
    </div>
  );
};

export default Board;
