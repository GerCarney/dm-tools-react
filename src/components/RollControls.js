import React, { Component } from 'react';

import './RollControls.css'

import RollIcon from '../assets/dice-icon.svg'

import SquareBtn from './SquareBtn'

class RollControls extends Component {

    constructor(props) {
        super(props);
        
        this.state = {inputVal:''}
    }
    

    // Roll Method

    roll = (query) => {
        this.props.rollDice(query);
    }

    // Form Input

        handleChange = (e) => {
            this.setState({inputVal:e.target.value});
        }

        keyPress = (e) => {
          if(e.keyCode == 13){
            this.props.rollDice(this.state.inputVal);
            this.setState({inputVal:''})
          }
        }

    // End Form Input


    // Generate Roll Buttons

   dicePresets = [20,12,10,8,6,4];

    diceButtons = () => {
       return this.dicePresets.map((die)=> 
            <SquareBtn onClick={() => this.roll('1d'+die)} icon={RollIcon}>{die}</SquareBtn>   
        )
    }



    render() {
        return (
            <div className="roll-controls">
                 <input value={this.state.inputVal} placeholder="eg. 1d6" onChange={this.handleChange} onKeyDown={this.keyPress} type="text"/>
                 <div className="btn-wrap">

                    {this.diceButtons()}

                 </div>
            </div>
        );
    }
}

export default RollControls;

