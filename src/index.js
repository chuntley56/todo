import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Todo extends Component {

  render(){
    return(
      <div>
      this is rendered by react
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.querySelector('.container'));
