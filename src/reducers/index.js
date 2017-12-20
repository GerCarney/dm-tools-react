import { combineReducers } from 'redux'
import rolls from './rolls'
import players from './players'
import modal from './modal'

const dmTools = combineReducers({
    rolls,
    players,
    modal
})

export default dmTools