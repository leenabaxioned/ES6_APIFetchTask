/* Author: */
// Fetch data from the API
const fetchTodos = async () => {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) throw new Error('Given API Network response was not ok');
      const todos = await response.json();
      displayTodos(todos);
  } catch (error) {
      console.error('There was a problem with the fetching API data:', error);
  }
};

// Display todos in the HTML
const displayTodos = (todos) => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = todos.map(todo => `
      <li class="${todo.completed ? 'completed' : 'uncompleted'}">
          ${todo.title}
      </li>
  `).join('');
};

// Call fetchTodos when the page loads
document.addEventListener('DOMContentLoaded', fetchTodos);