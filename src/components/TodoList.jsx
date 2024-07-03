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
      { text: inputText, completed: false, id: Math.floor(Math.random() * 100000) },
    ]);
  };

  const handleCompleteTask = (taskId) => {
    setTodoList(todoList.map(todo => {
        if (todo.id === taskId) {
            return {...todo, completed: !todo.completed}
        } else {
            return todo
        }
    }))
  }

  return (
    <div className="todo-list">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todo"
          value={inputText}
          onChange={(e) => handleInputChange(e)}
          placeholder="Create a new todo... "
        />
      </form>
        {todoList.map(todo => <TodoItem key={todo.text} todo={todo} handleChange={handleCompleteTask} />)}
    </div>
  );
}
