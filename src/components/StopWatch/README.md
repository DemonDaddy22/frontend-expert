# Stop Watch

_Tag_: **DOM Manipulation**

You're given HTML and CSS files for a simple stopwatch, and you need to make the stopwatch functional using JavaScript.

The stopwatch has a timer, which is meant to be controlled by the stopwatch's three buttons: a start button, a stop button, and a reset button. The stopwatch starts out in its idle state, with the timer at `00:00:00` and the start button as the only enabled button.

The stopwatch should have the following functionality:

- When the start button is pressed from the idle state, the timer should start counting up from `00:00:00`.
- While the timer is counting up, the stop button should be enabled, and the start and reset buttons should be disabled.
- When the stop button is pressed, the timer should pause.
- While the timer is paused, the stop button should be disabled, and the start and reset buttons should be enabled.
- When the start button is pressed from the paused state, the timer should resume counting up from its previous time.
- When the reset button is pressed from the paused state, the entire stopwatch should go back to its original idle state.
- The timer should be in the format `minutes:seconds:milliseconds`, with minutes and seconds having two digits and milliseconds having three digits. For example, if 2 minutes, 15 seconds, and 350 milliseconds have elapsed, the timer should read `02:15:350`.
- You don't need to handle times greater than `59:59:999`.
