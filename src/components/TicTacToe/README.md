# Tic Tac Toe

_Tag_: **DOM Manipulation**

Tic Tac Toe is a simple game where two players alternate marking the squares of a 3x3 board with "X"s and "O"s. The first player marks squares with "X"s, while the second player marks them with "O"s. The winner of the game is the first player to get three of their letters in a horizontal, vertical, or diagonal row. If the board fills up without any player winning, the game ends in a tie.

You're given HTML and CSS files for a simple Tic Tac Toe board, and you need to make the board functional using JavaScript.

The board has static heading that says "Tic Tac Toe", a dynamic heading that's initialized to "Player 1's Turn", and nine squares, which are meant to be clicked on by players. The board also has a restart button, which is hidden by default.

The board should have the following functionality:

- When a square is clicked on, an `X` or an `O` should appear on it, depending on whose turn it currently is. Additionally, the square should become disabled until the game is restarted.
- The dynamic heading should always stay updated with whose turn it currently is. For example, when it's player 2's turn, it should say "Player 2's Turn".
- When the game ends, the dynamic heading should say who won. For example, if player 1 won, it should say "Player 1 Won!". In the event of a tie, it should say "Tie Game!"
- The restart button should appear when the game ends. Clicking it should restart the game and hide the button again.
