import React from "react";
import { Todo } from "../constants/interfaces";
export const TodoList = ({ todos, setTodos }: any) => {
  return todos.length ? (
    <ul>
      {todos.map(
        (todo: Todo) =>
          todo && (
            <li
              style={{
                textDecoration: todo.status ? "line-through" : "",
              }}
              key={`id_${todo.id}`}
              onClick={() => {
                todo.status = !todo.status;
                setTodos([...todos]);
              }}
            >
              {todo.name}
            </li>
          )
      )}
    </ul>
  ) : (
    <p>NO TODO</p>
  );
};
