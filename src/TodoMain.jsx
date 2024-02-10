import React, { useState } from "react";
import Tag from "./Tag";
import Form from "./Form";
import {nanoid} from "nanoid"

export const Main = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: nanoid(), task: todo },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const elements = todos.map((todo) =>
    <Tag
      key={todo.id}
      task={todo}
      deleteTodo={deleteTodo}
    />
  )


  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <Form addTodo={addTodo} />
      {elements}
    </div>
  );
};
