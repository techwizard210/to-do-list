import React from "react";

const Form = (props) => {
  return (
    <>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder="add to do here"
      />
      <button onClick={props.onSubmit}>Add</button>
    </>
  );
};

export default Form;
