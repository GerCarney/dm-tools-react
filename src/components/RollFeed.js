import React, { Component } from 'react';

import './RollFeed.css'

import RollBlock from './RollBlock'

class RollFeed extends Component {
    
    render() {

        return (
            <div className="feed">
                {
                    this.props.rolls.map((roll)=>
                        <RollBlock roll={roll}  />
                    )
                }
            </div>
        );
    }
}

export default RollFeed;