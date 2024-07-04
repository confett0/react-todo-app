export default function TodoItem({ todo, handleChange, deleteTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <p>{todo.text}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}
