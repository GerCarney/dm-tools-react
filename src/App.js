import React, { Component } from 'react';
import './App.css';

import LeftBar from './containers/LeftBar'
import RightBar from './containers/RightBar'
import Main from './containers/Main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftBar/>
        <Main />
        <RightBar/>
      </div>
    );
  }
}

export default App;
