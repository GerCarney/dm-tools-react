const rollsInitialState = [];

const rolls = (state = rollsInitialState, action) => {
    switch (action.type) {
        case 'ROLL':

            return [...state, action.rollData];
        default:
            return state
    }
}

export default rolls;


