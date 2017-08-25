import React, {Component} from 'react';
import Song from './Song'
class SongCollection extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }



  render() {
    let songs = this.props.songData.map((song) => {
      let handleSongSelect = () => {
        this.props.handleSongSelect(song.id)
      }
      let className;
      if (this.props.selectedSongId === song.id) {
        className = 'selected';
      }
      return(
        <Song
          key={song.id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          className={className}
          handleSongSelect={handleSongSelect}
        />
      )
    })
    return(
      <div>
        <ul>{songs}</ul>
      </div>
    )
  }
}

export default SongCollection;
