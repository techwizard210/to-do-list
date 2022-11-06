import React from "react";

const ListItem = (props) => {
  const { name, done } = props.todo;
  return (
    <>
      <li style={{ textDecoration: done ? "line-through" : "" }}>
        {name}
        {!done ? <button onClick={props.completed}>completed</button> : ""}
        <button onClick={props.remove}>remove</button>
      </li>
    </>
  );
};

export default ListItem;
