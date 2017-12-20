const ROLL = 'ROLL'
const SHOW = 'SHOW_MODAL'

export const roll = (rollData, query) => {
    return {
        type: ROLL,
        ...rollData,
        query
    }
}


export const modal = (modalData, query) => {
    return {
        type: SHOW,
        ...modalData,
    }
}

