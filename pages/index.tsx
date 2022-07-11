import type { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import Hero from "../components/Hero";
import Todo from "../components/Todo";

const Home: NextPage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  // add todo
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {};
  };

  return (
    <div className=" bg-[#06113C] min-h-screen flex justify-center ">
      <div className=" w-[400px] ">
        <Hero todo={todo} setTodo={setTodo} />
        <Todo />
      </div>
    </div>
  );
};

export default Home;
