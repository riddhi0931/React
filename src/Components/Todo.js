import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const Todo = () => {
  const [input, setInput] = useState(""); //input ne grab karva mate (imput ni value show karva mate)
  const [data, setData] = useState([]); // input ni value lakhva mate (atle a ne blank array raakhyu che)

  // Click function
  const click = () => {
    if (!input) {
    } else {
      setData([...data, input]);
      setInput("");
    }
  };

  // Delete function
  const Delete = (id) => {
    const updateData = data.filter((elm, ind) => {
      return ind != id;
    });
    setData(updateData);
  };

  // Remove Button
  const removeAll = () => {
    setData([]);
  };

  return (
    <div>
      {/* Input */}
      <div className="flex flex-col items-center gap-6">
        {/* Header */}
        <h1 className=" text-3xl mt-5 text-slate-300 font-bold">TODO LIST</h1>

        {/* Sub Title */}
        <p className=" text-zinc-300 text-4xl mt-4">
          What's the Plan for Today?
        </p>

        {/* Task */}
        <div className="flex justify-center gap-2 mt-9">
          {/* TODO: Add input field */}
          <input
            type="text"
            placeholder="Add Item ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=" h-14 w-full  bg-black text-white p-3 text-lg font-semibold uppercase border border-slate-950 "
          />

          {/* TODO: Create a button to add todo item  */}
          <button
            onClick={click}
            className=" font-semibold h-30 w-36 border text-xl border-slate-950 bg-black text-white"
          >
            Add
          </button>
        </div>
      </div>

      {/* Add item list */}
      <div className=" flex flex-col items-center mt-8 uppercase gap-2">
        {data.map((elm, ind) => {
          return (
            <div
              className="flex justify-between items-center p-4 text-xl bg-slate-600 text-white h-10 w-[400px]"
              key={ind}
            >
              <h1>{elm}</h1>
              <i
                className="text-white cursor-pointer"
                onClick={() => Delete(ind)}
              >
                <AiFillDelete />
              </i>
            </div>
          );
        })}
      </div>

      {/* Clear All button */}
      <div className="flex justify-center mt-6 ">
        <button
          onClick={removeAll}
          className="font-semibold h-[45px] w-40 border text-xl border-slate-950 bg-black text-white"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default Todo;
