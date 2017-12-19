import React, { Component } from 'react';
import SidebarPC from '../components/SidebarPC'

import './LeftBar.css'

class LeftBar extends Component {
    render() {
        return (
            <div className="lb">
                <SidebarPC/>
                <SidebarPC/>
                <SidebarPC/>
            </div>
        );
    }
}

export default LeftBar;