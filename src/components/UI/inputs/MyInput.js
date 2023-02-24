import React, {useEffect, useRef, useState} from 'react';

const MyInput = ({id, type, label}) => {
  const [inputValue, setInputValue] = useState(false);

  let checkIfEmpty = (e) => {
    e.target.value === '' ? setInputValue(false) : setInputValue(true)
  }

  useEffect(() => {
  }, [inputValue])

  return (
    <div className={`inputContainer ${inputValue === false ? '' : 'active'}`}>
      <input onChange={(e) => checkIfEmpty(e)} id={id} type={type}/>
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default MyInput;