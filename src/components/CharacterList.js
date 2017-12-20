import React, { Component } from 'react';

import './CharacterList.css'


class CharacterList extends Component {


    
    render() {

        return (
            <div className="feed">
                {this.props.children}

            </div>
        );
    }
}

export default CharacterList;