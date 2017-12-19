import React, { Component } from 'react';

import './RollBlock.css'



class RollBlock extends Component {

    getModifier = () => {

        console.log(this.props);
        if(this.props.roll.modifier){
            return ' (+'+this.props.roll.modifier+')';
        }
    }

    render() {
        let r = this.props.roll;
        return (
            <div className="roll-block">
                <div className="roll-name">Roll</div>

                <div className="roll-query">Rolling {r.query}</div>

                <div className="roll-list">

                    {
                        r.rolls.map( (roll,i) => 
                            <span key={i} className="roll-num">
                                {roll} 
                            </span>
                            
                        )
                    }

                    {this.getModifier()}
                        
                    
                </div>

                <div className="roll-total">{r.result}</div>

            </div>
        );
    }
}

export default RollBlock;