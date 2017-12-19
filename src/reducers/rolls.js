const rollsInitialState = [];

const rolls = (state = rollsInitialState, action) => {
    switch (action.type) {
        case 'ROLL':


            return [action, ...state];
        default:
            return state
    }
}

export default rolls;


