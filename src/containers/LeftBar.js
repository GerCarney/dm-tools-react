import React, { Component } from 'react';
import CharacterList from '../components/CharacterList'
import SidebarPC from '../components/SidebarPC'
import ButtonContainer from '../components/ButtonContainer'

import './LeftBar.css'

class LeftBar extends Component {
    render() {
        return (
            <div className="lb">
            <CharacterList>
                <SidebarPC/>
                <SidebarPC/>
                <SidebarPC/>
            </CharacterList>

            <ButtonContainer/>

            </div>
        );
    }
}

export default LeftBar;