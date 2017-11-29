import React, { Component } from 'react';
import './App.css';

import RightBar from './containers/RightBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RightBar/>
      </div>
    );
  }
}

export default App;
