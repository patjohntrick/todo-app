import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";

type Props = {};

const Todo = (props: Props) => {
  return (
    <div>
      <div>
        <div className=" bg-[#040e34] rounded px-4 py-3 text-white/80 my-3 flex justify-between ">
          <p className=" w-[84%] ">laundry</p>
          <div className="btn grid gap-4 grid-cols-2">
            <button className=" text-green-800 hover:text-green-900 ">
              <FaCheck />
            </button>
            <button className=" text-red-800 hover:text-red-900 ">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
