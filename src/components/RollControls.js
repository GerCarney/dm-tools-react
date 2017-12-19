import React, { Component } from 'react';

import './RollControls.css'

import RollIcon from '../assets/dice-icon.svg'

import SquareBtn from './SquareBtn'

class RollControls extends Component {

    constructor(props) {
        super(props);
        
        this.state = {inputVal:''}
    }
    

    roll = (query) => {
        this.props.rollDice(query);
    }

    handleChange = (e) => {
        this.setState({inputVal:e.target.value});
   }

    keyPress = (e) => {
      if(e.keyCode == 13){
        this.props.rollDice(this.state.inputVal);
        this.setState({inputVal:''})
      }
   }


    render() {
        return (
            <div className="roll-controls">
                 <input value={this.state.inputVal} placeholder="eg. 1d6" onChange={this.handleChange} onKeyDown={this.keyPress} type="text"/>
                 <div className="btn-wrap">
                     <SquareBtn onClick={() => this.roll('1d20')} icon={RollIcon}>20</SquareBtn>
                     <SquareBtn icon={RollIcon}>12</SquareBtn>
                     <SquareBtn icon={RollIcon}>10</SquareBtn>
                     <SquareBtn icon={RollIcon}>8</SquareBtn>
                     <SquareBtn icon={RollIcon}>6</SquareBtn>
                     <SquareBtn icon={RollIcon}>4</SquareBtn>
                 </div>
            </div>
        );
    }
}

export default RollControls;

