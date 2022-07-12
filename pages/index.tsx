import type { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import Hero from "../components/Hero";
import Todo from "../components/Todo";
import nextId from "react-id-generator";
import { stringify } from "querystring";

type TodoType = {
  id: string;
  todo: string;
  isDone: boolean;
  delete: boolean;
};

const Home: NextPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todo, setTodo] = useState<string>("");

  // add todo
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: TodoType = {
      id: nextId(),
      todo,
      isDone: false,
      delete: false,
    };
    // console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo]);
    setTodo("");
  };

  // delete todo
  const deleteTodo = (id: string) => {
    const newTodo: TodoType[] = todos.filter((todo) => todo.id !== id);
    console.log(`${id} deleted`);
    setTodos(newTodo);
  };
  console.log(todos);

  return (
    <div className=" bg-[#06113c] min-h-screen flex justify-center ">
      <div className=" w-[400px] ">
        <Hero todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <Todo todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Home;
