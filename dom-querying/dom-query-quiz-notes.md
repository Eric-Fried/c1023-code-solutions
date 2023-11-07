# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  console.log

- What is a "model"?
  it is a programming API that defines logical structure and how items are accessed and manipulated.

- Which "document" is being referred to in the phrase Document Object Model?
  the html document

- What is a DOM Tree?
  it is a tree that represents the html elements within a html document

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector() and document.getElementById()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?
  in order to log the contents of that html element

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  so that all of the html elements may parse before being referenced by javascript
- What does `document.querySelector()` take as its argument and what does it return?
  it takes a string containing css selector(s) that u want to select and returns the element object matching the css selector specified

- What does `document.querySelectorAll()` take as its argument and what does it return?
  it takes a string of selectors and returns a non live nodelist containing one element for each element that matches the argument(s)

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
