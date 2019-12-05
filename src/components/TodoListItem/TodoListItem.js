import React, { useState } from "react";

export default function TodoListItem(props) {
  const [showDropDown, setShowDropDown] = useState(false);

  const {
    id,
    text,
    description,
    priority,
    done,
    onDeleted,
    onToggleDone,
    onToggleEdit
  } = props;
  let classNames = "todo";

  const isDone = done ? "" : " display_none";
  if (done) {
    classNames += " done";
  }

  const onToggleOpen = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className={classNames}>
      <div className={`todo__check ${isDone}`} onClick={onToggleDone}>
        <span className="glyphicon glyphicon-ok" aria-hidden="true">
          {" "}
        </span>
      </div>
      <h3 className="todo__title">{text}</h3>
      <div className="todo__description">{description}</div>
      <div className="todo__footer">
        <div className="todo__priority">{priority}</div>
        <div className="todo__button btn" onClick={onToggleOpen} id={id}>
          ...
        </div>
        <div className={`todo__menu ${showDropDown ? '' : " display_none"}`}>
          <div className="todo__menu-item task-done" onClick={onToggleDone}>
            done
          </div>
          <div className="todo__menu-item task-edit" onClick={onToggleEdit}>
            edit
          </div>
          <div className="todo__menu-item task-delete" onClick={onDeleted}>
            delete
          </div>
        </div>
      </div>
    </div>
  );
}
