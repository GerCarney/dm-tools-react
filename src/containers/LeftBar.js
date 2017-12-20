import React, { Component } from 'react';
import CharacterList from '../components/CharacterList'
import SidebarPC from '../components/SidebarPC'
import ButtonContainer from '../components/ButtonContainer'

import {connect} from 'react-redux'

import './LeftBar.css'

class LeftBar extends Component {
    render() {
        return (
            <div className="lb">
            <CharacterList>
            {
                this.props.players.map((player,i) => <SidebarPC key={i} player={player} />)
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar)
