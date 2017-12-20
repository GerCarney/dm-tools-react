const modalInitialState = [];

const modal = (state = modalInitialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                display:true,
                label:action.label,
                val:action.val
            }
        default:
            return state
    }
}

export default modal;


