import React from 'react';

const Song = props => {

  return(
      <li onClick={props.handleSongSelect} className={props.className}> {props.artist} - {props.name}</li>
  )
}

export default Song;
