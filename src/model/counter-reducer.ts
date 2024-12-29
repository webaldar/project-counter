import {counterValueType} from "../components/Counter";

const initialState: counterValueType = {
    counter: 0,
    startValue: 0,
    maxValue: 1,
}
export const counterReducer = (state: counterValueType = initialState, action: ActionType): counterValueType => {
    switch (action.type) {
        case 'SET_COUNTER': {
            return {
                ...state,
                counter: action.payload.sValue,
                startValue: action.payload.sValue,
                maxValue: action.payload.mValue
            }
        }
        case 'INCREMENT_COUNTER': {
            return {
                ...state, counter: action.payload.counter}
        }
        case 'RESET_COUNTER': {
            return {
                ...state,
                counter: action.payload.initialCounterValue,
                maxValue: 1
            }
        }

        default:
            return state
    }

}

// Actions creater
export const setRangeAC = (payload: { sValue: number, mValue: number }) => {
    return {
        type: 'SET_COUNTER',
        payload
    } as const
}
export const incrementCounterAC = (payload: {counter: number}) => {
    payload.counter++
    return {
        type: 'INCREMENT_COUNTER',
        payload
    } as const
}
export const resetCounterAC = (payload: {initialCounterValue: number}) => {
    return {
        type: 'RESET_COUNTER',
        payload
    } as const
}


//Types

export type SetCounter = ReturnType<typeof setRangeAC>
export type IncrementCounter = ReturnType<typeof incrementCounterAC>
export type ResetCounter = ReturnType<typeof resetCounterAC>

type ActionType = SetCounter | IncrementCounter | ResetCounter
