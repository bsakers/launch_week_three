import React, {Component} from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }



  render() {
    let playlists = this.props.playlists.map(list=>{
      let handlePlaylistSelect=()=>{
        this.props.handlePlaylistSelect(list.id)
      }
      let className;
      if (this.props.selectedPlaylistId === list.id) {
        className = 'selected';
      }
      return (
        <Playlist
          key = {list.id}
          id = {list.id}
          name = {list.name}
          songs = {list.songs}
          className={className}
          handlePlaylistSelect={handlePlaylistSelect}
        />
      )
    })
    return(
      <div>
        <ul>{playlists}</ul>
      </div>
    )
  }
}

export default PlaylistCollection;
