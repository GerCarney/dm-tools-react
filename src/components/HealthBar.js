import React, {Component} from 'react';

import "./HealthBar.css"

class HealthBar extends Component {


    barHealth = () => {

        var percent = (100 / this.props.total) * this.props.current;

        return {
            width: percent + '%'
        }
    }

    render() {
        return (
            <div className="hp-container" onClick={() => this.props.onClick()}>
                <div className="hp-values">{this.props.current}/{this.props.total}</div>
                <div className="hp-bar">
                    <div style={this.barHealth()} className="hp-fill"/>
                </div>
            </div>
        );
    }
}

export default HealthBar;