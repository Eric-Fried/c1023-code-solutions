# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  they are special functions onlt available while react is rendering and allow you to "hook into" different react features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  hooks can only be called at the top level of your component.

- What is the purpose of state in React?
  it allows us to re render something multiple times with different data based on the state of the component

- Why can't we just maintain state in a local variable?
  they dont persist between renders and they wont trigger a re render

- What two actions happen when you call a `state setter` function?
  react cache gets updated and a re render is triggered

- When does the local `state variable` get updated with the new value?
  after re rendering

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
