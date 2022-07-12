import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { IoIosAddCircle } from "react-icons/io";

type Props = {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  addTodo?: FormEventHandler<HTMLFormElement>;
};

const Hero = ({ todo, setTodo, addTodo }: Props) => {
  return (
    <div className="">
      <div className="text-container ">
        <p className="text-[#FF8C32] text-center text-2xl font-semibold mt-6 mb-4 ">
          Todo App
        </p>
        <form onSubmit={addTodo} className=" flex ">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add todo..."
            className=" border-[1px] border-white/20 rounded-l rounded-bl py-3 px-4 hover:border-white/40 focus:border-white/40 outline-none bg-[#06113C] text-white/80 w-full"
          />
          <button className=" bg-[#FF8C32] px-4 text-lg text-[#eee] grid place-items-center rounded-r rounded-br">
            <IoIosAddCircle />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
