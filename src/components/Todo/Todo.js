import React from "react";
import { useGlobalContext } from "./context/TodoContext";
import List from "./List";
import "./Todo.css";

function Todo() {
  const {
    title,
    handleInputChange,
    handleSubmit,
    todoList,
    handleClear,
    isEditing,
  } = useGlobalContext();
  return (
    <section className="todo-container">
      <div className="input-wrapper">
        <input
          type="text"
          className="user-input"
          value={title}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="eg: Complete Assignment"
        />
        <button className="submit" type="submit" onClick={handleSubmit}>
          {isEditing ? "Edit" : "Add"}
        </button>
      </div>
      {todoList.length ? (
        <div className="list-container">
          {todoList.map((todo) => {
            return <List key={todo.id} {...todo} />;
          })}
          <button className="clear-list" onClick={handleClear}>
            Clear
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default Todo;
