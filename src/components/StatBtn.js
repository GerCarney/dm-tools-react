import React, { Component } from 'react';

import './StatBtn.css'

class SquareBtn extends Component {

    

    btnStyle = () => {
return {
    backgroundImage: 'url(' + this.props.icon + ')'
}
    }

    render() {
        return (
            <div className="sq-btn">
                <button onClick={() => this.props.onClick()} style={this.btnStyle()}>{this.props.children}</button>
            </div>
        );
    }
}

export default SquareBtn;