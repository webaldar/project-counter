import {ChangeAndErrorType, ChangeAndErrorValueType} from "./SettingBlock";

const initialState: ChangeAndErrorType = {changeAndError: ''}
export const changeAndErrorReducer = (state: ChangeAndErrorType = initialState, action: ActionType): ChangeAndErrorType => {
    switch (action.type) {
        case 'SET_STATUS': {
            return {
                ...state, changeAndError: action.payload.value
            }
        }
        default:
            return state
    }

}

// Actions creater
export const setStatusAC = (payload: { value: ChangeAndErrorValueType }) => {
    return {
        type: 'SET_STATUS',
        payload
    } as const
}

//Types

export type SetStatus = ReturnType<typeof setStatusAC>

type ActionType = SetStatus
