import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";

type Props = {
  todos: {
    id: string;
    todo: string;
    isDone: boolean;
    delete: boolean;
  }[];

  deleteTodo: (id: string) => void;
};

const Todo = ({ todos, deleteTodo }: Props) => {
  return (
    <div>
      <div>
        {todos.map((todo) => {
          return (
            <div
              className=" bg-[#040e34] rounded px-4 py-3 text-white/80 my-3 flex justify-between "
              key={todo.id}
            >
              <p className=" w-[84%] ">{todo.todo}</p>
              <div className="btn grid gap-4 grid-cols-2">
                <button className=" text-green-800 hover:text-green-900 ">
                  <FaCheck />
                </button>
                <button
                  className=" text-red-800 hover:text-red-900 "
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
