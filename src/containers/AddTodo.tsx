import React, { useState } from "react";
import { Todo } from "../constants/interfaces";
interface AddTodoProps {
  setTodos: (todo: any) => void;
  todos: Todo[];
}
export const AddTodo = ({ setTodos, todos }: AddTodoProps) => {
  let [lastId, setlastId] = useState(1);
  return (
    <>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();

          setTodos([
            ...todos,
            { id: lastId, name: e.target["item"].value, status: 0 },
          ]);
          setlastId((lastId += 1));
          e.target["item"].value = "";
        }}
      >
        <input type="text" name="" id="item" />
        <button type="submit">add</button>
      </form>
    </>
  );
};
