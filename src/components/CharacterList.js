import React, { Component } from 'react';

import './CharacterList.css'


class CharacterList extends Component {


    
    render() {

        return (
            <div r className="feed">
                {this.props.children}

            </div>
        );
    }
}

export default CharacterList;