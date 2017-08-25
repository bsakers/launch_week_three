import React from 'react';


const List = props => {
  return (
    <div className='box list'>
      <h1>
        {props.header}
      </h1>
      <ul>
        {props.list.map((item, index)=>{
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  )
}

export default List;
