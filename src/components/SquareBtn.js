import React, { Component } from 'react';

import './SquareBtn.css'

class SquareBtn extends Component {

    constructor(props) {
        super(props);
        
    }

    icon = () =>{
        return {backgroundImage:'url('+this.props.icon+')'}
    }

    render() {
        return (
            <div onClick={this.props.onClick} className="sq-btn" style={this.icon()}>
                {this.props.children}
            </div>
        );
    }
}

export default SquareBtn;