import React from "react";

function Input({inputValue, writeTheTodo, addTheTodo}) {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter The Task..." value={inputValue} onChange={writeTheTodo}/>
      <button onClick={addTheTodo}>Add</button>
    </div>
  );
}

export default Input;
