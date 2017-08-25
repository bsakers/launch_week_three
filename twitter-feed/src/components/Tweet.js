import React from 'react';


const Tweet = props => {

  let text
  if(props.tweet.entities.media) {
    text= props.tweet.text.replace(props.tweet.entities.media[0].display_url, "")
  }
  else {
    text= props.tweet.text
  }

  let url
  if(props.tweet.entities.media) {
    url= props.tweet.entities.media[0].media_url
  }


  let timeStamp = Number(props.tweet.timestamp_ms)
  let timeString = new Date(timeStamp).toString()
  let timeSplit = timeString.split(" ")
  let finalDate = timeSplit[1] + " " + timeSplit[2]




  let replyButtonClick = () => {
    alert("Reply");
  }
  let retweetButtonClick = () => {
    alert("Retweet");
  }
  let likeButtonClick = () => {
    alert("Like");
  }
  let moreButtonClick = () => {
    alert("Favorite");
  }


  let heartColor
  if(props.tweet.favorited == true) {
    heartColor= "fa fa-heart icon-cog";
  } else {
    heartColor= "fa fa-heart";
  }

  let retweetedColor
  if(props.tweet.retweeted == true) {
    retweetedColor= "fa fa-retweet icon-cog";
  } else {
    retweetedColor= "fa fa-retweet";
  }

  return(
    <div className= "tweetBox">
      <img id="profPicture" src={props.tweet.user.profile_image_url}/>
      <h5>{props.tweet.user.name} </h5>
      <h6>@{props.tweet.user.screen_name}</h6>
      {finalDate}
      <p>{text}</p>
      <img src={url}/>
      <i className="fa fa-reply" aria-hidden="true" onClick={replyButtonClick}></i>
      <i className={retweetedColor} aria-hidden="true" onClick={retweetButtonClick}></i>{props.tweet.retweet_count}
      <i className={heartColor} aria-hidden="true" onClick={likeButtonClick}></i>{props.tweet.favorite_count}
      <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={moreButtonClick}></i>

    </div>

  )
}


export default Tweet;
