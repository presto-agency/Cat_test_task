import React from 'react';

const MyRadio = ({handleChange, id, value, selected, label}) => {
  const formatNum = (num) => (Math.round((num) * 100) / 100).toFixed(2);

  return (
    <div className="myRadio">
      <div className="myRadio__container">
        <input onChange={(e)=> handleChange(e.target.value)}
               checked={Number(selected) === value}
               id={id}
               name='radioButtons'
               type="radio"
               value={value}/>
        <label htmlFor={id}>
          {label}
        </label>
      </div>
      <p>${formatNum(value)}</p>
    </div>
  );
};

export default MyRadio;