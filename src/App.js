import React, { Component } from 'react';
import { connect } from 'react-redux';

import LeftBar from './containers/LeftBar'
import RightBar from './containers/RightBar'
import Main from './containers/Main'
import ModalBox from './containers/ModalBox'

import './App.css'

function mapStateToProps(state) {
  return {
    modal:state.modal
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftBar/>
        <Main />
        <RightBar/>
      
      
        
        {this.props.modal.displayed ? <ModalBox /> : ''}

      
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(App);