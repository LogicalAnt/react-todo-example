import React, { useState } from "react";
import "./App.css";
import { Todo } from "./constants/interfaces";
import { AddTodo } from "./containers/AddTodo";
import { TodoList } from "./containers/TodoList";
function App() {
  const [todos, setTodos] = useState<Array<Todo> | []>([]);
  return (
    <div className="App" style={{ margin: 10 }}>
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
