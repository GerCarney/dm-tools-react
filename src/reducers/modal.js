const modalInitialState = [];

const modal = (state = modalInitialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...action
            }
        case 'CLOSE_MODAL':
            return {
                ...action,
                displayed:false
            }
        default:
            return state
    }
}

export default modal;
