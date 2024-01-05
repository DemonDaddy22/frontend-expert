import React, { useCallback, useReducer } from 'react';
import classes from './styles.module.scss';
import { isEmptyList, shuffleArray } from '../../../../utils';
import { MEMORY_CONFIG } from '../../../../constants';
import Button from '../../../UI/Button';

const ACTION_TYPE = Object.freeze({
  UPDATE_BOARD: 'UPDATE_BOARD',
  UPDATE_VALID_MOVES_COUNT: 'UPDATE_VALID_MOVES_COUNT',
  UPDATE_MOVES: 'UPDATE_MOVES',
  RESET_GAME: 'RESET_GAME',
});

const INITIAL_STATE = {
  board: shuffleArray([...MEMORY_CONFIG.TILES, ...MEMORY_CONFIG.TILES]),
  validMovesCount: 0,
  moves: MEMORY_CONFIG.TILES.reduce((accu, curr) => {
    accu[curr] = [];
    return accu;
  }, {} as { [key: string]: [] }),
};

const reducer = (state: IMemoryBoardState, action: IMemoryBoardAction) => {
  const { value, type } = action;

  switch (type) {
    case ACTION_TYPE.UPDATE_BOARD:
      return {
        ...state,
        board: value,
      };
    case ACTION_TYPE.UPDATE_VALID_MOVES_COUNT:
      return {
        ...state,
        validMovesCount: value,
      };
    case ACTION_TYPE.UPDATE_MOVES:
      return {
        ...state,
        moves: value,
      };
    case ACTION_TYPE.RESET_GAME:
      return {
        ...INITIAL_STATE,
        board: shuffleArray([...MEMORY_CONFIG.TILES, ...MEMORY_CONFIG.TILES]),
      };
    default:
      return state;
  }
};

const Board: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getTileClassName = useCallback(
    (tile: string, index: number) => {
      const baseClassName = classes.tile;
      if (state.moves[tile].includes(index)) {
        switch (tile) {
          case MEMORY_CONFIG.TILES_MAP.red:
            return `${baseClassName} ${classes.tileRed}`;
          case MEMORY_CONFIG.TILES_MAP.green:
            return `${baseClassName} ${classes.tileGreen}`;
          case MEMORY_CONFIG.TILES_MAP.blue:
            return `${baseClassName} ${classes.tileBlue}`;
          case MEMORY_CONFIG.TILES_MAP.yellow:
            return `${baseClassName} ${classes.tileYellow}`;
          default:
            return baseClassName;
        }
      }
      return baseClassName;
    },
    [JSON.stringify(state.moves)]
  );

  const handleTileClick = useCallback(
    (tile: string, index: number) => {
      const { validMovesCount, moves } = state;
      if (validMovesCount % 2 === 0) {
        dispatch({ type: ACTION_TYPE.UPDATE_VALID_MOVES_COUNT, value: validMovesCount + 1 });
        dispatch({ type: ACTION_TYPE.UPDATE_MOVES, value: { ...moves, [tile]: [index] } });
      } else {
        const tileMoves = [...moves[tile]];
        if (tileMoves.includes(index)) {
          return;
        }

        if (isEmptyList(tileMoves)) {
          tileMoves.push(index);
          dispatch({ type: ACTION_TYPE.UPDATE_MOVES, value: { ...moves, [tile]: tileMoves } });

          let tileToEmpty: string;
          for (let colorTile of Object.keys(moves)) {
            if (moves[colorTile].length % 2 !== 0) {
              tileToEmpty = colorTile;
              break;
            }
          }
          setTimeout(() => {
            dispatch({ type: ACTION_TYPE.UPDATE_VALID_MOVES_COUNT, value: validMovesCount - 1 });
            dispatch({
              type: ACTION_TYPE.UPDATE_MOVES,
              value: {
                ...moves,
                [tileToEmpty]: [],
                [tile]: [],
              },
            });
          }, 1000);
        } else {
          tileMoves.push(index);
          dispatch({ type: ACTION_TYPE.UPDATE_VALID_MOVES_COUNT, value: validMovesCount + 1 });
          dispatch({ type: ACTION_TYPE.UPDATE_MOVES, value: { ...moves, [tile]: tileMoves } });
        }
      }
    },
    [state.validMovesCount, JSON.stringify(state.moves)]
  );

  return (
    <div className={classes.game}>
      <h1 className={classes.title}>{state.validMovesCount === MEMORY_CONFIG.BOARD_SIZE ? 'You Win!' : 'Memory'}</h1>
      <div className={classes.board}>
        {state.board.map((tile: string, index: number) => (
          <div
            key={`tile-${tile}-${index}`}
            className={getTileClassName(tile, index)}
            onClick={() => handleTileClick(tile, index)}></div>
        ))}
      </div>
      {state.validMovesCount === MEMORY_CONFIG.BOARD_SIZE && (
        <Button onClick={() => dispatch({ type: ACTION_TYPE.RESET_GAME })}>Restart</Button>
      )}
    </div>
  );
};

export default Board;
