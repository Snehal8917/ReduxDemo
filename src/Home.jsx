import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom); // Accessing the state

  console.log("Current count:", c); // Debugging log

  const addBtn = () => {
    dispatch({ type: "increment" });
  };

  const addByValueBtn = (value) => {
    dispatch({ type: "incrementByValue", payload: value });
  };

  const subBtn = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={addBtn}>Increment</button>
      <button onClick={() => addByValueBtn(10)}>Increment By 10</button>
      <button onClick={subBtn}>Decrement</button>
      <h2>Hello {c}</h2>
    </div>
  );
};

export default Home;
