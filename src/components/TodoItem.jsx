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
      <button className="del-button" onClick={() => deleteTodo(todo.id)}><img src="./icon-cross.svg"/></button>
    </div>
  );
}
