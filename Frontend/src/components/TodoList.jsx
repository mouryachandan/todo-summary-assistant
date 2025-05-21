import "../style/TodoList.css"
function TodoList({ todos = [], deleteTodo }) {
  if (!Array.isArray(todos)) {
    console.error("Invalid 'todos' prop:", todos);
    return <div>Loading todos...</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span className="todo-text">{todo.title}</span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="todo-delete-btn"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
