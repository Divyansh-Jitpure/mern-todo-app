import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { GrRadialSelected } from "react-icons/gr";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, [todos]);

  const handleStatus = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleDel = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="m-10 text-3xl font-bold">ToDo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div className="mt-12 text-3xl">
          <h2>No Records</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div
            className={
              todo.status
                ? "my-1 flex w-80 items-center justify-between bg-green-500 px-4 text-xl text-white"
                : "my-1 flex w-80 items-center justify-between bg-gray-500 px-4 text-xl text-white"
            }
          >
            <section className="flex items-center gap-2 capitalize">
              <button onClick={() => handleStatus(todo._id)}>
                <GrRadialSelected />
              </button>
              {todo.task}
            </section>
            <button onClick={() => handleDel(todo._id)}>
              <MdDelete className="" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
