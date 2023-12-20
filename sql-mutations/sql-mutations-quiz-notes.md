# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  insert , update, delete

- How do you add a row to a SQL table?
  using the insert operation and then specifying the columns and their values
- How do you add multiple rows to a SQL table at once?
  same syntax as for one row but u separeate the desired values into tuples with perentheses
- How do you update rows in a database table?
  update operation and specifying what table u want to change , what columns within the desired row and then a where clause to specify the row
- How do you delete rows from a database table?
  delete operation and then specifying what table u want to change , what columns within the desired rows and then a where clause to specify the rows
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  because otherwise the change will be applied to the entire table

- How do you accidentally delete or update all rows in a table?
  when u dont use a where clause when using delete

- How do you get back the modified row without a separate `select` statement?
  returning \*

- Why did you get an error when trying to delete certain films?
  i didnt ????

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
