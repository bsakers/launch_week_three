import React from 'react';

const Playlist = props => {

  return(
    <div>
      <li onClick={props.handlePlaylistSelect} className={props.className}>{props.name}</li>
    </div>
  )
}

export default Playlist;
