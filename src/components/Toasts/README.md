# Toasts

_Tag_: **DOM Manipulation**

You're given HTML and CSS files for a simple toast system, and you need to make the toast system functional using JavaScript.

A toast is a simple pop-up that appears on a page, usually to communicate status information to a user. The toast system that you have to build is meant to let you create toasts of different genres.

First of all, clicking the provided `#add-button` button should create a toast by prepending the appropriate HTML to the provided `#toasts` div, and toasts should generally follow this HTML format:

```html
<div class="toast success-toast">
  <p class="message">Message content</p>
  <button class="cancel-button">X</button>
</div>
```

There shouldn't be a limit to how many toasts can be created at the same time, but each toast should disappear after some period of time, specified by one of the provided inputs on the page (see the bullet points below). Also, clicking the `#clear-button` button should immediately remove all toasts from the page.

The toasts should be customizable with the various provided inputs, as follows:

- The `#success` and `#error` radio buttons should control if the next toast is a success toast or an error toast. Success toasts should have the `success-toast` class, while error toasts should have the `error-toast` class.
- The `#message-content` textarea should control the contents of the next toast. If no message is present in the textarea, the toast message should default to either "Success!" or "Error.", depending on if the toast is a success toast or an error toast. The toast message should always be a paragraph with the class `message`.
- The `#duration` input should control how long the next toast is visible in milliseconds. If the duration value is less than 500, an empty string, or otherwise not a number, a default value of 500 milliseconds should be used.
- The `#cancelable` checkbox should control whether the next toast has a cancel button:
  - If the checkbox isn't checked, the toast shouldn't have a cancel button in its HTML.
  - A cancel button should always have the `cancel-button` class and `X` as its text content.
  - Clicking the cancel button should immediately remove the relevant toast from the page.
