import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../model/counter-reducer";

const rootReucer = combineReducers({
    counterValue: counterReducer
})

export const store = legacy_createStore(rootReucer)

export type RootState = ReturnType<typeof store.getState>