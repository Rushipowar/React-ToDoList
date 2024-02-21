import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTheTodo(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function addTheTodo() {
    if (input != " ") {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  function delTheTodo(todoIndex) {
    setTodos((todos) => todos.filter((todos, index) => index !== todoIndex));
  }

  console.log(todos);

  return (
    <>
      <main>
        <h1>ToDoList</h1>

        <Input
          inputValue={input}
          writeTheTodo={writeTheTodo}
          addTheTodo={addTheTodo}
        />

        <Todo todos={todos} delTheTodo={delTheTodo} />
      </main>
    </>
  );
}

export default App;
