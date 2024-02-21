import React from "react";

function TodoList({todo, Index, delTheTodo}) {
  return (
    <div className="todos">
      <p>{todo}</p>

      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => delTheTodo(Index)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoList;
