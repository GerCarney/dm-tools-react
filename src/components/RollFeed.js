import React, { Component } from 'react';

import './RollFeed.css'

import RollBlock from './RollBlock'

class RollFeed extends Component {

    componentDidUpdate(){
        this.feed.scrollTop = 0;
    }
    
    render() {

        return (
            <div ref={(feed) => this.feed = feed} className="feed">
                {
                    this.props.rolls.map((roll,i)=>
                        <RollBlock key={i} roll={roll}  />
                    )
                }
            </div>
        );
    }
}

export default RollFeed;