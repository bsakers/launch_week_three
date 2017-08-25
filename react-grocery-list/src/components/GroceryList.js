import React from 'react';
import Grocery from './Grocery';

const GroceryList = props => {

  let groceryData = props.groceries
  let groceries = groceryData.map(item =>{
    return(
      <Grocery
        key={item.id}
        groceryName={item.name}
        handleButtonClick={props.handleButtonClick}
      />
    )
  })

  return(
      <ul>
        {groceries}

      </ul>
  );
};


export default GroceryList;
