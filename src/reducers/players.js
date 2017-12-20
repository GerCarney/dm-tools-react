const playersInitialState = [];

const players = (state = playersInitialState, action) => {
    switch (action.type) {
        case 'ROLL':
            return [action, ...state];
        default:
            return state
    }
}

export default players;


