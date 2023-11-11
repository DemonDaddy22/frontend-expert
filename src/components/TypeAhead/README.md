# Type Ahead

_Tag_: **DOM Manipulation**

You're given an API endpoint that returns a list of FrontendExpert glossary terms that start with a given string, and you have to use this API to implement a search typeahead. Due to CORS, we cannot access the FrontendExpert API here so instead using a free movies API, which can be found [here](https://rapidapi.com/SAdrian/api/moviesdatabase).

For this question, the search typeahead is a special input field (with `typeahead` as its id) that issues API requests with the text that a user types into it. More specifically, it issues an API request after the user has stopped typing for some time—not while the user is typing—and it displays the results of the API request as suggestions for the user.

The provided API expects GET requests at this URL: [https://api.frontendexpert.io/api/fe/glossary-suggestions](https://api.frontendexpert.io/api/fe/glossary-suggestions)

Each API request should include a `text` query parameter. For example, this would be a valid URL to request: [https://api.frontendexpert.io/api/fe/glossary-suggestions?text=acc](https://api.frontendexpert.io/api/fe/glossary-suggestions?text=acc)

The API responds with a JSON array of strings, each of which is a glossary-term name that starts with the passed `text`.

For example, the URL above might respond with:

```json
["Accessibility", "Accessibility Tree"]
```

When the user stops typing into the typeahead for 500ms, a request should be made to the API to get suggestions for the text that's currently typed into the typeahead input field.

Once an API request resolves, the suggestions returned by the API should be displayed on the page, replacing any previously displayed suggestions. Each suggestion should be an HTML list item appended to the provided `#suggestions-list` `ul`, and each suggestion should have the relevant API-responded glossary-term name as its text content.

For example, if the API request above were to resolve, the suggestions HTML would look like this:

```html
<ul id="suggestions-list">
  <li>Accessibility</li>
  <li>Accessibility Tree</li>
</ul>
```

If the user clicks on one of the suggestions, its value should be filled into the typeahead, and the displayed suggestions should be cleared.

If the user clears the typeahead (e.g., backspaces all of the typed text), the displayed suggestions should be cleared, and no API request should be made.

You should use the global `fetch()` method to make requests to the API.
