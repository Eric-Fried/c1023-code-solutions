# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  parameter => statment
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  it needs the return keyword in the statement
- When using _concise body syntax_, how do you return an object literal?
  specify an object in the return statment
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    ()=> 43
  - How many arguments does the arrow function take?
    none
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    one
  - What type of argument is passed to the function `foo`?
    an arrow function
- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  (y)=>{console.log(`4y = ${4 * y}`)}

      - How many arguments does the arrow function take?

  one

      - What value does it return?

console.log(`4y = ${4 * y}`)

    - How many arguments are passed to the function `bar`?

one

    - What type of argument is passed to the function `bar`?

arrow function

    - When does the arrow function's code get executed?

when bar is called

- How does the value of `this` differ between standard functions and arrow functions?
  it changes the lexical scope of the value of this

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
