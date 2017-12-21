const ROLL = 'ROLL'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

export const roll = (rollData, query) => {
    return {

        type: ROLL,
        ...rollData,
        query
    }
}

export const openModal = (modalData) => {
    return {
        type: OPEN_MODAL,
        ...modalData
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}


export const saveChanges = (changeData) => {
    return {
        type: changeData.type,
        ...changeData
    }
}
