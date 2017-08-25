import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm("Are you sure you don't want to see Tay Sway sway her tay tays?")
  }

  let submitForm = (event) => {
    event.preventDefault();
    console.log("The form was submitted");
  }


  return(
    <div id= "popUp" className= "popUp">
      <span onClick={handleExit} className="close">&times;</span>
      <h1>You have won tickets to see {props.artist}!!</h1>
      <h4>Please enter your email so we can send you the tickets</h4>
      <form>
        <input type="text" id="email" name="email" placeholder="Your email here"/>
        <input onClick={submitForm} type="submit" id="submit" value="CLAIM YOUR PRIZE" />
      </form>

    </div>
  )
}

export default Popup;
