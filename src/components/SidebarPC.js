import React, {Component} from 'react';

import "./SidebarPC.css";

import HealthBar from './HealthBar'
import StatBtn from './StatBtn'

import armorIcon from '../assets/armor.svg'
import initiative from '../assets/time.svg'

class SidebarPC extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Snorre",
            health: {
                total: 20,
                current: 10
            },
            initiative: 14
        }
    }

    render() {

        return (
            <div className="sb-pc">
                <div className="name">{this.state.name}</div>
                <HealthBar total={this.state.health.total} current={this.state.health.current}/>
                <div className="btn-row">
                    <StatBtn icon={armorIcon}>99</StatBtn>
                    <StatBtn icon={initiative}>21</StatBtn>

                </div>
            </div>
        );
    }
}

export default SidebarPC;