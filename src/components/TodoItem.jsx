export default function TodoItem({todo}) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} />
            <p>{todo.text}</p>
        </div>
    )
}