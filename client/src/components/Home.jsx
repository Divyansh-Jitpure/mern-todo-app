import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, [todos]);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="m-10 text-3xl font-bold">ToDo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div className="mt-12 text-3xl">
          <h2>No Records</h2>
        </div>
      ) : (
        todos.map((todo) => <div>{todo.task}</div>)
      )}
    </div>
  );
};

export default Home;
