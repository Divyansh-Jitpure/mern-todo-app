import React, { useRef, useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();
  const inputRef = useRef();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => console.log(result).catch((err) => console.log(err)));
    inputRef.target.value = "";
  };
  return (
    <div className="flex gap-1">
      <input
        className="w-64 rounded-s border-2 border-black px-1"
        type="text"
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
      />
      <button
        onClick={handleAdd}
        className="rounded-e border-2 border-black px-2 text-lg font-semibold transition-all duration-100 hover:bg-black hover:text-white active:bg-white active:text-black"
      >
        Add
      </button>
    </div>
  );
};

export default Create;
