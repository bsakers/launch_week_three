import React from 'react';


const Grocery = props => {
  let groceryName = props.groceryName;

  return(
    <li>
      {groceryName}
      <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </li>
  )
}

export default Grocery;
