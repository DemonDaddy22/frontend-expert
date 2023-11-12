# Tier List

_Tag_: **DOM Manipulation**

You're given HTML and CSS files for a simple tier list, and you need to make the tier list functional using JavaScript.

A tier list is a system that allows you to rank items from best to worst. The provided tier list has three tiers (A, B, and C) and three items (colored squares), which start out in an unranked section.

The tier list should have the following functionality:

- Each element with the `item` class (each colored square) should be draggable.
- If a colored square is drag-and-dropped in an element with the `drop-zone` class (one of the grey drop zones), the square should be appended to that element. If the square was already in that drop zone or if the square is dropped anywhere else on the page, nothing should happen (the square should remain where it was).
- If a colored square is double-clicked, it should be appended to the element with the `unranked-drop-zone` id (the grey drop zone in the unranked section). If the item was already in the unranked drop zone, nothing should happen (the square should remain where it was).

Your solution should use the standard browser drag-and-drop API.
