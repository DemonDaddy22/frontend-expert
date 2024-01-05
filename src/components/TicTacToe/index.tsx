import React, { useCallback, useMemo, useState } from 'react';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import Button, { ButtonGreen } from '../UI/Button';
import Divider from '../UI/Divider';

const TOTAL_TILES = 9;
const WINNING_COMBINATIONS = [
  new Set([0, 1, 2]),
  new Set([3, 4, 5]),
  new Set([6, 7, 8]),
  new Set([0, 3, 6]),
  new Set([1, 4, 7]),
  new Set([2, 5, 8]),
  new Set([0, 4, 8]),
  new Set([2, 4, 6]),
];

// TODO - add line indicator when game is won

const TicTacToe: React.FC<Props> = () => {
  const [, setMoves] = useState<{[key: string]: Array<number>}>({ x: [], o: [] });
  const [board, setBoard] = useState<{[key: number]: string}>({});
  const [isGameOver, setIsGameOver] = useState(false);
  const [movesCount, setMovesCount] = useState(0);

  const handleResetGame = useCallback(() => {
    setMoves({ x: [], o: [] });
    setBoard({});
    setIsGameOver(false);
    setMovesCount(0);
  }, []);

  const isVictoryMove = useCallback((currMoves: Array<number>) => {
    let matchCount = 0;
    for (let combination of WINNING_COMBINATIONS) {
      combination.forEach((value) => {
        if (currMoves.includes(value)) {
          matchCount++;
        }
      });
      if (matchCount >= TOTAL_TILES / 3) {
        return true;
      }
      matchCount = 0;
    }
    return false;
  }, []);

  const handleGameTileClick = useCallback((tileIndex: number) => {
    if (isGameOver || movesCount >= TOTAL_TILES || board?.[tileIndex]) {
      return;
    }

    const isTurnOfPlayer1 = movesCount % 2 === 0;
    const currPlayer = isTurnOfPlayer1 ? 'x' : 'o';

    setBoard((prevBoard) => ({
      ...prevBoard,
      [tileIndex]: currPlayer,
    }));

    setMoves((prevMoves) => {
      const currPlayerMoves = [...prevMoves[currPlayer]];
      currPlayerMoves.push(tileIndex);

      const updatedMovesCount = movesCount + 1;

      const isPlayerWon = isVictoryMove(currPlayerMoves);
      if (!isPlayerWon) {
        setMovesCount(updatedMovesCount);
      }

      setIsGameOver((updatedMovesCount >= TOTAL_TILES) || isPlayerWon);

      return {
        ...prevMoves,
        [currPlayer]: currPlayerMoves,
      };
    });
  }, [isGameOver, movesCount, board, isVictoryMove]);

  const renderGameStatus = useMemo(() => {
    let gameStatus: string;
    if (movesCount >= TOTAL_TILES) {
      gameStatus = 'Tie Game!';
    } else if (movesCount % 2 === 0) {
      gameStatus = isGameOver ? 'Player 1 Won!' : `Player 1's Turn`;
    } else {
      gameStatus = isGameOver ? 'Player 2 Won!' : `Player 2's Turn`;
    }
    return (
      <h2 className={classes.gameStatus}>{gameStatus}</h2>
    );
  }, [isGameOver, movesCount]);

  return (
    <ProjectPage>
      <QuestionDetails
        title='Tic Tac Toe'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}
      >
        <p>
          Tic Tac Toe is a simple game where two players alternate marking the squares of a 3x3 board with "X"s and
          "O"s. The first player marks squares with "X"s, while the second player marks them with "O"s. The winner of
          the game is the first player to get three of their letters in a horizontal, vertical, or diagonal row. If the
          board fills up without any player winning, the game ends in a tie.
        </p>
        <p>
          You're given HTML and CSS files for a simple Tic Tac Toe board, and you need to make the board functional
          using JavaScript.
        </p>
        <p>
          The board has static heading that says "Tic Tac Toe", a dynamic heading that's initialized to "Player 1's
          Turn", and nine squares, which are meant to be clicked on by players. The board also has a restart button,
          which is hidden by default.
        </p>
        <p>The board should have the following functionality:</p>
        <ul>
          <li>
            When a square is clicked on, an <span className={classes.questionDescriptionHighlight}>X</span> or an{' '}
            <span className={classes.questionDescriptionHighlight}>O</span> should appear on it, depending on whose turn
            it currently is. Additionally, the square should become disabled until the game is restarted.
          </li>
          <li>
            The dynamic heading should always stay updated with whose turn it currently is. For example, when it's
            player 2's turn, it should say "Player 2's Turn".
          </li>
          <li>
            When the game ends, the dynamic heading should say who won. For example, if player 1 won, it should say
            "Player 1 Won!". In the event of a tie, it should say "Tie Game!"
          </li>
          <li>
            The restart button should appear when the game ends. Clicking it should restart the game and hide the button
            again.
          </li>
        </ul>
      </QuestionDetails>
      <Divider />
      <main className={classes.solutionContainer}>
        <section className={classes.gameContainer}>
          <h1 className={classes.gameTitle}>Tic Tac Toe</h1>
          {renderGameStatus}
          <div className={classes.board} aria-label='board' aria-details='Tic Tac Toe Board'>
            {Array(9).fill(null).map((_, index) => (
              <Button
                key={`tile-${index + 1}`}
                className={classes.tile}
                onClick={() => handleGameTileClick(index)}
                disabled={!!board?.[index]}
                aria-label='tile'
                aria-details={`Tic Tac Toe Tile ${index + 1}`}
              >
                {board?.[index] ?? ''}
              </Button>
            ))}
          </div>
          {isGameOver && <ButtonGreen onClick={handleResetGame}>Restart Game</ButtonGreen>}
        </section>
      </main>
    </ProjectPage>
  );
};

export default TicTacToe;
