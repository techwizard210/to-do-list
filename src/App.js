import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import ListItem from "./ListItem";
const tasks = [
  { name: "task 1", done: false },
  { name: "task 2", done: false },
  { name: "task 3", done: true },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return alert("please fill out task name");
    }
    const newArr = todos.slice();
    newArr.unshift({ name: inputValue, done: false });
    setTodos(newArr);
    setInputValue("");
  };

  const handleItem = ({type, index}) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "complete") newArr[index].done = true;
    return setTodos(newArr);
  };

  return (
    <>
      <Form
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onSubmit={handleInput}
      />
      <ul>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            todo={todo}
            remove={() => handleItem({ type: "remove", index })}
            completed={() => handleItem({ type: "complete", index })}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
