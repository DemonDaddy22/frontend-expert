# Phone Input

_Tag_: **React**

You're given a CSS file for a phone input, and you need to implement the component using React.

The component should return two elements, the input and a submit button.

The input has the following functionality:

- Typing any character except a number has no effect.
- After typing the first number, a "(" is added before that first number. For example, "(1".
- After typing the fourth number, a ") " is added before that new number. For example, "(123) 4". Note there is a space after the closing parenthesis.
- After typing the seventh number, a "-" is added before that new number. For example, "(123) 456-7".
- No more than 10 numbers can be typed, meaning a completed phone number looks like "(123) 456-7890".
- If multiple numbers are typed at once, the same formatting rules apply as if they were typed one at a time.
- Pressing backspace removes one number at a time, including any corresponding formatting characters.
- If the input is empty, it has a placeholder of "(555) 555-5555".

To the left of the input is a button with the text of "Submit" and the following characteristics:

- If the input does not have a complete phone number, the button is disabled.
- Clicking the button when it is enabled clears the input, including any formatting characters.
