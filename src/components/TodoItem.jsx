export default function TodoItem({ todo, handleChange }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={handleChange}
      />
      <p>{todo.text}</p>
    </div>
  );
}
