# Sudoku

_Tag_: **DOM Manipulation**

You're given HTML and CSS files for a Sudoku game based on The [New York Times Number Puzzles](https://www.nytimes.com/puzzles/sudoku), and you need to make the game functional using JavaScript.

Sudoku is a popular puzzle game, where the goal is to fill in every cell of a 9x9 grid with the numbers one through nine such that no duplicates appear in any row, column, or 3x3 subgrid.

The provided board contains two types of cells: given numbers and standard cells:

- Given numbers have the `given-number` class, are grey with a pre-filled number, and should have no functionality.
- Standard cells have two child spans with classes of `candidates` and `value`, respectively, and they're white. When a standard cell is clicked on, it should become selected (i.e., the cell should have the `selected` class). Only one cell should be selectable at a time (i.e., selecting a cell should unselect the previously selected cell).

To the right of the Sudoku board is a provided set of controls. These controls include buttons with the numbers one through nine as well as a toggle button (which is an HTML checkbox input field). The controls should have the following functionality:

- When the `#candidate-switch` checkbox is unchecked (i.e., set to "Normal Move"), clicking on any of the number control buttons should place that number in the `.value` span of the selected cell.
- The `.candidates` spans of standard cells should act as lists of candidate moves (potential moves) for each cell. When the `#candidate-switch` checkbox is checked (i.e., set to "Candidate Move"), clicking on any of the number control buttons should toggle that number in the `.candidates` span of the selected cell. In other words, if the `.candidates` span already contained the number, it should be removed; otherwise it should be added.
- The contents of the `.candidates` spans should always be sorted in ascending order, and there shouldn't be duplicate numbers in an individual candidates list. There should also be no spaces or other delimiters between numbers in a candidates list.
- If no cell is selected, clicking the number controls should have no effect.
