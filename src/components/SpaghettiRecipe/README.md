# Spaghetti Recipe

_Tag_: **HTML**

You've been provided with a recipe for spaghetti as raw text, and you need to convert this recipe into a
properly marked-up HTML file.

The recipe should have a primary heading of "Spaghetti Recipe", and it should be divided into two sections,
the ingredients and the instructions, with the headings "Ingredients" and "Instructions", respectively.

The ingredients are an unordered list with the following contents:

```README
- Spaghetti
- Marinara Sauce
- Salt
- Water
```

The instructions are an ordered list with the following contents:

```README
1. Bring water to a boil.
2. Add spaghetti to boiling water
  1. Add spaghetti to boiling water
  2. Add salt to taste.
3. Cook for 10 minutes, stirring occasionally.
4. Add marinara sauce to a pan, bringing to a simmer.
5. Mix cooked spaghetti with marinara sauce.
```

Note that "Add salt to taste." and "Cook for 10 minutes, stirring occasionally." are in a sub-ordered list
under the second instruction. Your HTML code should use proper semantic markup.
