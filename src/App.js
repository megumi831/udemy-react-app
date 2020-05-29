import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <lavel htmlFor="bar">bar</lavel>
        <input type="text" onClick={() => {console.log("Hi!")}}/>
      </React.Fragment>
    )
    
    
  }
}


export default App;
