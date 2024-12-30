// @flow 
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {incrementCounterAC, resetCounterAC} from "../model/counter-reducer";
import {Button} from "./Button";
import {ButtonControlType, incButtonStatusAC, resetButtonStatusAC} from "./buttonControl-reducer";
import {ChangeAndErrorType} from "./SettingBlock";

export type counterValueType = {
    counter: number
    startValue: number
    maxValue: number
}

export const DisplayAndControlBlock = () => {

    const counterValue = useSelector<RootState, counterValueType>
        (state => state.counterValue)
    const changeAndError = useSelector<RootState, ChangeAndErrorType>
        (state => state.changeAndError)
    const buttonControl = useSelector<RootState, ButtonControlType>
        (state => state.buttonControl)

    const dispatch = useDispatch()

    // let maxCounterStyle: boolean = false
    // let resetButtonStyle: boolean = true

    if (counterValue.counter === counterValue.maxValue) {
        dispatch(incButtonStatusAC({value: true}))
        // buttonControl.incButton = true
        // maxCounterStyle = true
    }
    if (counterValue.counter !== counterValue.startValue) {
        dispatch(resetButtonStatusAC({value: false}))
        // buttonControl.resetButton = false
        //resetButtonStyle = false
    }

    const incrementCount = () => {
        dispatch(incrementCounterAC({counter: counterValue.counter}))
    }
    const resetCounter = () => {
        dispatch(resetCounterAC({initialCounterValue: counterValue.startValue}))
    }

    return (
        <div className={'wrapper'}>
            <div className='counter-wrapper'>
                {changeAndError.changeAndError === '' &&
                    <span className={buttonControl.incButton ? 'max-count' : 'counter-style'}>{counterValue.counter}</span>}
                {changeAndError.changeAndError === 'change' &&
                    <span className={'message-style'}>Enter values and press 'Set'</span>}
                {changeAndError.changeAndError === 'error' &&
                    <span className={'message-error-style'}>Incorrect value!!!</span>}

            </div>
            <div className="button-wrapper">
                <Button title={'inc'} onclick={incrementCount} className={'button'} disabled={buttonControl.incButton}/>
                <Button title={'reset'} onclick={resetCounter} className={'button'} disabled={buttonControl.resetButton}/>
                {/*<Button title={'inc'} onclick={incrementCount} className={'button'} disabled={maxCounterStyle}/>*/}
                {/*<Button title={'reset'} onclick={resetCounter} className={'button'} disabled={resetButtonStyle}/>*/}
            </div>
        </div>
    );
};