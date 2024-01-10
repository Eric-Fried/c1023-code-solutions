async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error();
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
}

fetchUsers();
