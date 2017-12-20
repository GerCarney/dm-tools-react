const ROLL = 'ROLL'
const SHOW = 'SHOW'

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

