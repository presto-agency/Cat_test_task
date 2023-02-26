import React, {useState} from "react";

const MyInput = ({id, type = "text", label}) => {
  const [inputValue, setInputValue] = useState(false);

  let checkIfEmpty = (e) => {
    e.target.value === "" ? setInputValue(false) : setInputValue(true)
  }

  return (
    <div className={`inputContainer${inputValue === false ? "" : " active"}`}>
      {id === "delivery"
        ? <textarea id={id} onChange={(e) => checkIfEmpty(e)}/>
        : <input onChange={(e) => checkIfEmpty(e)} id={id} type={type}/>
      }
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default MyInput;