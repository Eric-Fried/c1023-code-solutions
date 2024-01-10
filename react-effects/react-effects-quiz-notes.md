# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  on the initial render
- What is a React Effect?
  they are code blocks that can step outside the react paradigm and allow you to sychronize outside systems with your
  components like maybe linking a non react widget , network or even the browser DOM

- When should you use an Effect and when should you not use an Effect?
  you should use an effect if the thing you are trying to trigger is from an external system like a chatroom connection occuring when a window opens
  you shouldnt use an effect if the thing you want to trigger is internal and part of your component anyway.
- When do Effects run?
  they run on every re render

- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  they are all the reactive values referenced inside the setup code. you declare them immediatly after the closing curly brace for the useEffect hook.
- Why would you want to clean up from an Effect?

- How do you clean up from an Effect?
  you simply undo or reverse any permanent code that occurs inside the setup code
- When does the cleanup function run?
  it runs after the first render and upon every re render.

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
