# Purchase Form

_Tag_: **CSS**

You're given an HTML file with the markup for a purchase form, similar to the actual purchase form on AlgoExpert.

Using only CSS, style the purchase form to have the following characteristics:

- The .wrapper should have 12px of padding, a border radius of 12px, and a background color of #E0E0E0.
- The ordered list should be styled as a stepper component:
  - This stepper should be horizontally centered with no padding, but it should maintain its default vertical margin.
  - Each list item in the stepper should have its corresponding item number above its text content, and this number should be inside of a circle with a white background color, a width of 30px, 8px of bottom margin, a font-size of 24px, and a solid, black, 4px border. The number inside of the circle should be horizontally and vertically centered, and the circle should be horizontally centered above the text content.
  - The number-circle for the list item with the selected class should have white text and a background color of #279600.
  - Between each pair of adjacent number-circles should be a 4px-tall black horizontal line. These divider lines should be vertically centered with respect to the number-circles, and they should sit exactly between the circles, just touching their edges.
- The unordered list should be styled as follows:
  - The unordered list should maintain its default margin, but it should have no padding.
  - Each list item in the unordered list represents a single product offering and should have 12px of padding, 12px of vertical margin, a height of 40px, a border-radius of 8px, bold font, and a white background color.
  - The labels should have 4px of left margin and a text color based on the list-item class, following this mapping:
    - .blue-product: #8C96F6
    - .red-product: #E64970
    - .orange-product: #F37F1B
    - .green-product: #25B59B
  - Each product-offering list item should also have a solid, 5px left border of the same color as its text.
- The "Continue" button should be aligned to the right side of the .wrapper, with 12px of padding, a font-size of 16px, a border radius of 8px, a background color of #02203C and a white text color. For convenience, the starting code includes variables with most of the specified pixel values and colors.
