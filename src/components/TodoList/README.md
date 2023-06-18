# Todo List

_Tag_: **DOM Manipulation**

You're given HTML and CSS files for a simple todo list, and you need to make the todo list functional using JavaScript.

The todo list has an input field and an add button, which are meant to be used to create named todo items. It also has an empty `#todo-list` `ul`, to which todo items will be appended.

The todo list should have the following functionality:

- When nothing is typed into the input, the add button should be disabled. Otherwise, it should be enabled.
- When the add button is enabled and clicked on, a new todo item should be created and appended to the `#todo-list`, and the input should be cleared.
- Each todo item should be an HTML list item with two children: a level-two heading and a button element. The heading should have the text content of whatever was typed into the input at the time of creation, and the button should have `X` as its text content and `delete-button` as its class (this class is defined in the provided CSS file).
- When the `X` button of a todo item is clicked on, the todo item should be removed from the list. Below is an example of a todo item in HTML:

```html
<li>
  <h2>Practice for frontend interviews</h2>
  <button class="delete-button">X</button>
</li>
```
