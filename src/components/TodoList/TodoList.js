import React from "react";
import TodoListItem from "../TodoListItem";

function TodoList({
  todos,
  onDeleted,
  onToggleDone,
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
          onToggleEdit={() => onToggleEdit(id)}
        />
      </div>
    );
  });

  return <div className="todo-list">{items}</div>;
}

export default TodoList;
