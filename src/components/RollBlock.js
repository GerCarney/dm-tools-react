import React, { Component } from 'react';

import './RollBlock.css'

class RollBlock extends Component {
    render() {
        return (
            <div className="roll-block">
                <div className="roll-name">Longsword</div>
                <div className="roll-query">Rolling {this.props.roll}</div>

                <div className="roll-list">
                    <span className="roll-num fail">1</span>
                    <span className="roll-num">5</span>
                    <span className="roll-num crit">6</span>
                </div>

                <div className="roll-total">12</div>

            </div>
        );
    }
}

export default RollBlock;