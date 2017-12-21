const playersInitialState = [];

const players = (state = playersInitialState, action) => {
    switch (action.type) {
        case 'SAVE_CHANGES_PLAYERS':

            var updatedPlayers = state.map((player) => {

                if (player.id !== action.id) {
                    return player;
                } else {
                    return {
                        ...player,
                        [action.field]: action.val
                    }
                }
            });
            return updatedPlayers;

        default:
            return state
    }
}

export default players;
