# Memory

_Tag_: **React**

You're given a CSS file for a memory game, and you need to implement the component using React.

When the component first mounts, it should render an `h1` with the text content of `Memory` followed by a `div` with the CSS class of `board`.

The board should contain 2 tile divs for each element in the given `TILE_COLORS` array ('red', 'green', 'blue', and 'yellow'). These tiles should be in a random order, based on a single call to the given `shuffle` function.

Each tile div should have the tile class. When a tile is clicked on, it should be considered selected, and it should also be given its class from the `TILE_COLORS` array. Clicking on a tile that is already selected should have no effect.

When two tiles are selected, they should be compared to check for a match. If there is a match, the tiles should keep their color class. If there is no match, then after 1 second both tiles should have their color classes removed. During this 1 second waiting period, no other tiles should be selectable.

Once all of the matches have been found (i.e. every tile has its color class), The `h1` text content should change to `You Win!`. Additionally, a button should appear below the board div with the text content of `Restart`. When this button is clicked on, the tiles should all be flipped over (the color classes removed), and they should be shuffled into new random locations to restart the game. The `h1` text content should also return to the initial text content of `Memory`, and the restart button should be removed from the page.

The complete HTML output of the memory component might look something like this initially:

```html
<h1>Memory</h1>
<div class="board">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

After the game completes, that HTML might change to this:

```html
<h1>You Win!</h1>
<div class="board">
  <div class="tile red"></div>
  <div class="tile blue"></div>
  <div class="tile red"></div>
  <div class="tile yellow"></div>
  <div class="tile blue"></div>
  <div class="tile yellow"></div>
  <div class="tile green"></div>
  <div class="tile green"></div>
</div>
<button>Restart</button>
```
