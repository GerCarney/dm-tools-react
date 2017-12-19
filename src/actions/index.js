const ROLL = 'ROLL'

export const roll = (rollData, query) => {
    return {
        type: ROLL,
        ...rollData,
        query
    }
}

