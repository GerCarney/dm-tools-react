import React, {Component} from 'react';

import "./SidebarPC.css";

import HealthBar from './HealthBar'
import StatBtn from './StatBtn'

import armorIcon from '../assets/armor.svg'
import initiative from '../assets/time.svg'

class SidebarPC extends Component {

    openModal = (field) => {
        this.props.openModal({
            section:'players',
            id:this.props.id,
            field
        });
    }

    render() {
        let player = this.props.player

        return (
            <div className="sb-pc">
                <div className="name">{player.name}</div>
                <HealthBar onClick={() => this.openModal('hp')}  total={player.hp_total} current={player.hp}/>
                <div className="btn-row">
                    <StatBtn onClick={() => this.openModal('armor')} icon={armorIcon}>{player.armor}</StatBtn>
                    <StatBtn onClick={() => this.openModal('initiative')} icon={initiative}>{player.initiative}</StatBtn>

                </div>
            </div>
        );
    }
}

export default SidebarPC;