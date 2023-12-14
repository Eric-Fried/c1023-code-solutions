# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?'
  they are used to make a function run asychronously

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  they differ because they can be used for things other than just promises and can make other functions asycrhonous

- When do you use `async`?
  whenever u are trying to make a function run asychronously

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  you use await on an asychronous function. if u use it on a sychronous function it has no affect

- How do you handle errors with `await`?
  by using try/catch

- What do `try`, `catch` and `throw` do? When do you use them?
  try/catch tell javascript a sequence of directions to try first and then a set on instructions that are to be executed if the first set fails

throw simply defines a user defined exception

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it will not wait to return its value and the caller function will not appear on the stack trace

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  i prefer the async /await becasue it has less inherent complications that can occur when used at scale

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
