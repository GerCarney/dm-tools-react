import React, {Component} from 'react';

import "./SidebarPC.css";

import HealthBar from './HealthBar'
import StatBtn from './StatBtn'

import armorIcon from '../assets/armor.svg'
import initiative from '../assets/time.svg'

class SidebarPC extends Component {

    editValue = (stat) => {
        this.props.editVal({
            stat,
            state:'player',
            id:this.props.player.id
        });

        console.log('clicked');
    }

    render() {
        let player = this.props.player

        return (
            <div className="sb-pc">
                <div className="name">{player.name}</div>
                <HealthBar total={player.health.total} current={player.health.current}/>
                <div className="btn-row">
                    <StatBtn onClick={() => this.editValue('armor')} icon={armorIcon}>{player.armor}</StatBtn>
                    <StatBtn onClick={() => this.editValue('initiative')} icon={initiative}>{player.initiative}</StatBtn>

                </div>
            </div>
        );
    }
}

export default SidebarPC;