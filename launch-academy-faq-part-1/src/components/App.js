import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: false
    }
    this.handlePlusClick = this.handlePlusClick.bind(this)
    this.handleMinusClick = this.handleMinusClick.bind(this)
  }
  handlePlusClick(event) {
    this.setState({ visibility: true })
  }
  handleMinusClick(event) {
    this.setState({ visibility: false })
  }

  render(){
    let answer
    let buttonIcon
    let testing

    if(this.state.visibility == true){
      buttonIcon="fa fa-minus-square"
      answer=this.props.data.answer
      testing=this.handleMinusClick
    } else{
      buttonIcon="fa fa-plus-square"
      answer =""
      testing=this.handlePlusClick
    }


    return(
      <div className="questionAnswer">
        <h1>{`We're here to help`}</h1>
        <div className="question">
          <i className={buttonIcon} onClick={testing}></i>
          <p>{this.props.data.question}</p>
        </div>
        <div className="answer">
          <p>{answer}</p>
        </div>
      </div>

    )
  }
}

export default App;
