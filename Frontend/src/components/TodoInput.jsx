import '../style/TodoInput.css';

function TodoInput({ title, setTitle, addTodo }) {
  return (
    <div className="todo-input-wrapper">
      <div className="todo-input-container">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo..."
          className="todo-input"
        />
        <button onClick={addTodo} className="todo-button">
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TodoInput;

