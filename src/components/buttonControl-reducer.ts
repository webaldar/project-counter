
export type ButtonControlType = {
    setButton: boolean
    incButton: boolean
    resetButton: boolean
}

const initialState: ButtonControlType = {
    setButton: false,
    incButton: true,
    resetButton: true,
}
export const buttonControlReducer = (state: ButtonControlType = initialState, action: ActionType): ButtonControlType => {
    switch (action.type) {
        case 'SET_BUTTON_STATUS': {
            return {
                ...state, setButton: action.payload.value
            }
        }
        case 'INC_BUTTON_STATUS': {
            return {
                ...state, incButton: action.payload.value
            }
        }
        case 'RESET_BUTTON_STATUS': {
            return {
                ...state, resetButton: action.payload.value
            }
        }

        default:
            return state
    }

}

// Actions creater
export const setButtonStatusAC = (payload: {value: boolean }) => {
    return {
        type: 'SET_BUTTON_STATUS',
        payload
    } as const
}
export const incButtonStatusAC = (payload: {value: boolean }) => {
    return {
        type: 'INC_BUTTON_STATUS',
        payload
    } as const
}
export const resetButtonStatusAC = (payload: {value: boolean }) => {
    return {
        type: 'RESET_BUTTON_STATUS',
        payload
    } as const
}


//Types

export type setButtonStatus = ReturnType<typeof setButtonStatusAC>
export type incButtonStatus = ReturnType<typeof incButtonStatusAC>
export type resetButtonStatus = ReturnType<typeof resetButtonStatusAC>

type ActionType = setButtonStatus | incButtonStatus | resetButtonStatus
