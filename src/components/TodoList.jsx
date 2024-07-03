import { useState } from "react";
import initialData from "../initialData";

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(initialData);

  const handleInputChange = (e) => setInputText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevList) => [
      ...prevList,
      { text: inputText, completed: false },
    ]);
  };

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
      
    </div>
  );
}
