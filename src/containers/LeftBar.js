import React, { Component } from 'react';
import CharacterList from '../components/CharacterList'
import SidebarPC from '../components/SidebarPC'
import ButtonContainer from '../components/ButtonContainer'

import {openModal} from '../actions'

import {connect} from 'react-redux'

import './LeftBar.css'

class LeftBar extends Component {

    openModal = (data) => {

        var modalData = {displayed:true, ...data};
        this.props.openModal(modalData)
        
    }

    render() {
        return (
            <div className="lb">
            <CharacterList>
            {
                this.props.players.map((player,i) => <SidebarPC openModal={this.openModal} id={player.id} key={player.id} player={player} />)
            }
            </CharacterList>
            <ButtonContainer/>

            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (data) => {
            dispatch(openModal(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar)
