import {combineReducers, legacy_createStore} from "redux";
import {buttonControlReducer} from "../components/buttonControl-reducer";
import {changeAndErrorReducer} from "../components/changeAndError-redeucer";
import {counterReducer} from "../model/counter-reducer";

const rootReucer = combineReducers({
    counterValue: counterReducer,
    changeAndError: changeAndErrorReducer,
    buttonControl: buttonControlReducer,
})

export const store = legacy_createStore(rootReucer)

export type RootState = ReturnType<typeof store.getState>