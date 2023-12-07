# Quiz

_Tag_: **React**

You're given a CSS file for a multiple choice quiz, and you need to implement the component using React.

When the component initially mounts, it should make an API request to the quiz API at:

```text
https://opentdb.com/api.php?amount=3&type=multiple
```

For more info about the API, visit

```text
https://opentdb.com/api_config.php
```

Once the request to the API returns, the first quiz question should be displayed. The question should be in an `h1` at the top of the component.

Below the question should be the answers, which should each be an `h2` with the text content of the answer. Each answer should also have an `answer` class. If an answer is clicked on, it should also be given the `correct` or `incorrect` class based on if the answer is the correct answer.

Only one answer should be selectable at a time, and clicking other answers should have no effect until moving on to the next question.

Below the answers should be two buttons with the text of `Back` and `Next` in that order. Both buttons should be initially disabled. The next button should only be enabled when an answer has been selected for the current question. When the next button is enabled and clicked on, it should change the question to the next question. On the last question, the next button should always be disabled.

The back button should be enabled whenever not currently on the first question, even if an answer has not yet been selected. Clicking the back button should return to the previous question, but with the previously selected answer already selected.

The complete HTML output of the Quiz component might look something like this after "useFetch" has been incorrectly selected on the first question:

```html
<h1>Which of the following is a built-in React hook?</h1>

<h2 class="answer">useState</h2>
<h2 class="answer incorrect">useFetch</h2>
<h2 class="answer">useLocalStorage</h2>
<h2 class="answer">useTimeout</h2>

<button disabled="true">Back</button>
<button>Next</button>
```
