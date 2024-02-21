import React from "react";
import TodoList from "./TodoList";

function Todo({todos, delTheTodo}) {
  return (
    <div className="task-container">
       {
         todos.map((todo, Index)=>{
             return <TodoList todo={todo} Index={Index} delTheTodo={delTheTodo}/>
         })
       }
    </div>
  );
}

export default Todo;
