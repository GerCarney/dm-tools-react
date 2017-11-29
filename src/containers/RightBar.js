import React, { Component } from 'react'
import './RightBar.css'

import RollControls from '../components/RollControls.js'
import RollFeed from '../components/RollFeed.js'

import { connect } from 'react-redux'
import { roll } from '../actions'


class RightBar extends Component {

    rollDice = (query) => {
        this.props.rollDice(query);
    }

    render () {
        return (
            <div className="rb">
                <RollFeed rolls={this.props.rolls} />
                <RollControls rollDice={this.rollDice} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rolls: state.rolls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rollDice: query => {
            dispatch(roll(query))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RightBar)


