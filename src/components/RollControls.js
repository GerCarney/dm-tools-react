import React, { Component } from 'react';

import './RollControls.css'

import RollIcon from '../assets/dice-icon.svg'

import SquareBtn from './SquareBtn'

class RollControls extends Component {

    roll = (query) => {
        this.props.rollDice(query);
    }

    render() {
        return (
            <div className="roll-controls">
                 <input placeholder="eg. 1d6" type="text"/>
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

