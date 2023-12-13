import React, { useCallback, useReducer } from 'react';
import classes from './styles.module.scss';
import { createListOfSize } from '../../../../utils';
import { CONNECT_FOUR_CONFIG } from '../../../../constants';
import { ButtonWhite } from '../../../UI/Button';

const ACTION_TYPE = Object.freeze({
  UPDATE_BOARD: 'UPDATE_BOARD',
  TOGGLE_IS_P1_TURN: 'TOGGLE_IS_P1_TURN',
  SET_IS_GAME_OVER: 'SET_IS_GAME_OVER',
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
    case ACTION_TYPE.TOGGLE_IS_P1_TURN:
      return {
        ...state,
        isPlayerOneTurn: !state.isPlayerOneTurn,
      };
    case ACTION_TYPE.SET_IS_GAME_OVER:
      return {
        ...state,
        isGameOver: true,
      };
    case ACTION_TYPE.RESET_BOARD:
    default:
      return INITIAL_STATE;
  }
};

const Board: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { isPlayerOneTurn, isGameOver, board } = state;

  const getPlayerClassName = useCallback((player: number | null) => {
    const baseClassName = classes.player;
    switch (player) {
      case CONNECT_FOUR_CONFIG.PLAYERS.P1:
        return `${baseClassName} ${classes.playerOne}`;
      case CONNECT_FOUR_CONFIG.PLAYERS.P2:
        return `${baseClassName} ${classes.playerTwo}`;
      default:
        return baseClassName;
    }
  }, []);

  const getLastEmptyCell = useCallback(
    (colIndex: number) => {
      const col: Array<number | null> = [...board[colIndex]];
      col.reverse();
      const lastEmptyCell = col.findIndex((item) => item === null);
      return lastEmptyCell >= 0 ? col.length - lastEmptyCell - 1 : lastEmptyCell;
    },
    [JSON.stringify(board)]
  );

  const hasPlayerWon = useCallback(
    (
      col: number,
      row: number,
      colStep: number,
      rowStep: number,
      player: number,
      currBoard: Array<Array<number | null>>
    ) => {
      let consecutiveMoves = 0;
      let currCol = col;
      let currRow = row;

      while (
        currCol < CONNECT_FOUR_CONFIG.MAX_COLS &&
        currRow < CONNECT_FOUR_CONFIG.MAX_ROWS &&
        currBoard[currCol][currRow] === player
      ) {
        consecutiveMoves++;
        currCol += colStep;
        currRow += rowStep;
      }

      currCol = col - colStep;
      currRow = row - rowStep;

      while (currCol >= 0 && currRow >= 0 && currBoard[currCol][currRow] === player) {
        consecutiveMoves++;
        currCol -= colStep;
        currRow -= rowStep;
      }

      return consecutiveMoves >= CONNECT_FOUR_CONFIG.COUNT_TO_WIN;
    },
    []
  );

  const handleTileClick = useCallback(
    (colIndex: number) => {
      const lastEmptyCell = getLastEmptyCell(colIndex);
      if (isGameOver || lastEmptyCell < 0) {
        return;
      }

      const currBoard = JSON.parse(JSON.stringify(board));
      const currPlayer = isPlayerOneTurn ? CONNECT_FOUR_CONFIG.PLAYERS.P1 : CONNECT_FOUR_CONFIG.PLAYERS.P2;
      currBoard[colIndex][lastEmptyCell] = currPlayer;
      dispatch({ type: ACTION_TYPE.UPDATE_BOARD, value: currBoard });

      const hasWonVertically = hasPlayerWon(colIndex, lastEmptyCell, 0, 1, currPlayer, currBoard);
      const hasWonHorizontally = hasPlayerWon(colIndex, lastEmptyCell, 1, 0, currPlayer, currBoard);
      const hasWonDiagonally =
        hasPlayerWon(colIndex, lastEmptyCell, 1, 1, currPlayer, currBoard) ||
        hasPlayerWon(colIndex, lastEmptyCell, 1, -1, currPlayer, currBoard);

      if (hasWonVertically || hasWonHorizontally || hasWonDiagonally) {
        dispatch({ type: ACTION_TYPE.SET_IS_GAME_OVER });
      } else {
        dispatch({ type: ACTION_TYPE.TOGGLE_IS_P1_TURN });
      }
    },
    [isPlayerOneTurn, isGameOver, JSON.stringify(board), getLastEmptyCell, hasPlayerWon]
  );

  return (
    <div className={classes.game}>
      {isGameOver && (
        <h1 className={classes.title}>
          Player {isPlayerOneTurn ? CONNECT_FOUR_CONFIG.PLAYERS.P1 : CONNECT_FOUR_CONFIG.PLAYERS.P2} Wins!
        </h1>
      )}
      <div className={classes.board}>
        {board.map((column: Array<null | number>, colIndex: number) => (
          <div className={classes.column} key={`column-${colIndex}`}>
            {column.map((item, index) => (
              <div className={classes.tile} key={`tile-${colIndex}-${index}`} onClick={() => handleTileClick(colIndex)}>
                <div className={getPlayerClassName(item)}></div>
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
