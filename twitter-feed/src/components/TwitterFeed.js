import React from 'react';
import Tweet from './Tweet'



const TwitterFeed= props => {
  let tData= props.data.map(tweet => {
    return(
      <Tweet
        key={tweet.id_str}
        tweet={tweet}
      />
    )
  })
  return(
    <div>
      {tData}
    </div>
  )
}


export default TwitterFeed;
