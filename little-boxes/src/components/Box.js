import React from 'react';

const Box = props => {
  let date = (new Date).toString()
  let random = parseInt(Math.random() * 100)

  let boxClass = `box ${props.boxClass}`

  let paragraph
  if (props.paragraph) {
    paragraph = <p>{props.paragraph}</p>
  }

  let url
  if (props.url) {
    url = <img alt='Clever EEs' src={props.url}/>
  }

  let list
  if (props.list) {
    list = <ul>{props.list.map((item, index)=>{
      return <li key={index}>{item}</li>;
    })} </ul>
  }

  let dateNumber
  if (props.boxClass == "box numbers") {
    dateNumber = <p>
      Today''s date is
      <strong>&nbsp;{date}&nbsp;</strong>
      and
      <em>&nbsp;{random}&nbsp;</em>
      is a random number.
    </p>
  }


  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      {paragraph}
      {url}
      {list}
      {dateNumber}
    </div>
  )
}

export default Box;
