import { useState } from "react";
import initialData from "../initialData";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(initialData);

  const handleInputChange = (e) => setInputText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevList) => [
      ...prevList,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 100000),
      },
    ]);
  };

  const handleCompleteTask = (taskId) => {
      const newList = todoList.map((todo) => {
        if (todo.id === taskId) {
            console.log(todo)
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
      setTodoList(newList)
  };

  return (
    <div className="todo-wrap">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todo"
          value={inputText}
          onChange={(e) => handleInputChange(e)}
          placeholder="Create a new todo... "
        />
      </form>
      <div className="todo-list">
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo}
            handleChange={handleCompleteTask}
          />
        ))}
      </div>
    </div>
  );
}
