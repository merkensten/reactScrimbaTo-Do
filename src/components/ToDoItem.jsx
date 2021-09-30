import React from 'react';
import './ToDoItem.css';

export const ToDoItem = (props) => {
  return (
    <>
      <div className="to-do">
        <input type="checkbox" />
        <p>{props.todo.text}</p>
      </div>
    </>
  );
};
