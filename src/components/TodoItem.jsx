export default function TodoItem({
  todo,
  handleChange,
  deleteTodo,
  dragStart,
  dragEnter,
  drop,
}) {
  return (
    <div
      className={todo.completed ? "todo-item completed" : "todo-item"}
      onDragStart={(e) => {
        e.target.classList.add("dragging");
        dragStart(e);
      }}
      onDragEnter={(e) => {
        e.target.classList.remove("dragging");
        dragEnter(e);
      }}
      onDragEnd={drop}
      draggable
    >
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <p>{todo.text}</p>
      <button className="del-button" onClick={() => deleteTodo(todo.id)}>
        <img src="./icon-cross.svg" />
      </button>
    </div>
  );
}
