import React from 'react';

const Inputs = ({changeHandler, clickHandler}) => (
  <div>
    <input type="text" onChange={changeHandler} />
    <button onClick={clickHandler}>Search</button>
  </div>
);

export default Inputs;
