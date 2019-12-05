import React from "react";
import TodoListItem from "../TodoListItem";
import "./todoList.css";

function TodoList({
  todos,
  onDeleted,
  onToggleDone,
  onToggleOpen,
  onToggleEdit
}) {
  const items = todos.map(item => {
    const { id } = item;
    return (
      <div key={id}>
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleOpen={() => onToggleOpen(id)}
          onToggleEdit={() => onToggleEdit(id)}
        />
      </div>
    );
  });

  return <div className="todo-list">{items}</div>;
}

export default TodoList;
