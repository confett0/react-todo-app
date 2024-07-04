import { useState } from "react";
import initialData from "../initialData";
import TodoItem from "./TodoItem";
import TabButtons from "./TabButtons";

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(initialData);
  const [activeTabIndex, setActiveTabIndex] = useState("0");

  const FILTER_ALL = "0";
  const FILTER_ACTIVE = "1";
  const FILTER_COMPLETED = "2";

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
    setInputText("");
  };

  const handleCompleteTask = (taskId) => {
    const newList = todoList.map((todo) => {
      if (todo.id === taskId) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodoList(newList);
  };

  const clearCompleted = () => {
    setTodoList(prevList => prevList.filter(todo => !todo.completed));
    setActiveTabIndex(FILTER_ALL); // display all todos
  };

  const filterTodos = (id) => {
    setActiveTabIndex(id);
  };

  const getDisplayedList = () => {
    switch (activeTabIndex) {
      case FILTER_ACTIVE:
        return todoList.filter((todo) => !todo.completed);
      case FILTER_COMPLETED:
        return todoList.filter((todo) => todo.completed);
      default:
        return todoList;
    }
  };

  const deleteTodo = (todoId) => {
    setTodoList(prevList => prevList.filter(todo => todo.id !== todoId))
  }

  const activeTodoNumber = todoList.filter((todo) => !todo.completed).length;
  const displayedList = getDisplayedList();

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
            deleteTodo={deleteTodo}
          />
        ))}
        <div className="todo-list-footer">
          <p>{activeTodoNumber} {activeTodoNumber === 1 ? "item" : "items"} left</p>
          <div className="filter-button-wrap">
            <TabButtons
              name="All"
              id={FILTER_ALL}
              active={activeTabIndex === FILTER_ALL}
              handleClick={filterTodos}
            />
            <TabButtons
              name="Active"
              id={FILTER_ACTIVE}
              active={activeTabIndex === FILTER_ACTIVE}
              handleClick={filterTodos}
            />
            <TabButtons
              name="Completed"
              id={FILTER_COMPLETED}
              active={activeTabIndex === FILTER_COMPLETED}
              handleClick={filterTodos}
            />
          </div>
          <button onClick={clearCompleted}>Clear completed</button>
        </div>
      </div>
    </div>
  );
}
