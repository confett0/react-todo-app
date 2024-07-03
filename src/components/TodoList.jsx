import { useState } from "react";
import initialData from "../initialData";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(initialData);
  const [displayedList, setDisplayedList] = useState(todoList)

  const activeTodoList = todoList.filter(todo => !todo.completed)
  const completedTodoList = todoList.filter(todo => todo.completed)
  const activeTodoNumber = activeTodoList.length

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
        {displayedList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo}
            handleChange={handleCompleteTask}
          />
        ))}
        <div className="todo-list-footer">
            <p>{activeTodoNumber} items left</p>
            <div className="filter-button-wrap">
                <button onClick={() => setDisplayedList(todoList)}>All</button>
                <button onClick={() => setDisplayedList(activeTodoList)}>Active</button>
                <button onClick={() => setDisplayedList(completedTodoList)}>Completed</button>
            </div>
            <button>Clear completed</button>
        </div>
      </div>
    </div>
  );
}
