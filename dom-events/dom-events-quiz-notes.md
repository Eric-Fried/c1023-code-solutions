# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to make sure the event listener is actually working
- What is the purpose of events and event handling?
  to cause a reaction to something being interacted with
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener
- What is a callback function?
  it is a function that is passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it is the automatically passed argument that is passed to the listener. you could check mdn
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  one of them is passing in handleClick as a callback and one is passing in the evaluated result of calling handleClick as an argument

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
