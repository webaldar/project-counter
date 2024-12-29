// @flow 
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {incrementCounterAC, resetCounterAC} from "../model/counter-reducer";
import {Button} from "./Button";
import {changeAndErrorType, counterValueType} from "./Counter";

type DisplayAndControlBlockProps = {
    changeAndError: changeAndErrorType
    counterValue: counterValueType
};


export const DisplayAndControlBlock = ({
                                           changeAndError,
                                       }: DisplayAndControlBlockProps) => {

    const counterValue = useSelector<RootState, counterValueType>(state => state.counterValue)

    const dispatch = useDispatch()

    let maxCounterStyle: boolean = false
    let resetButtonStyle: boolean = true

    if (counterValue.counter === counterValue.maxValue) {
        maxCounterStyle = true
    }
    if (counterValue.counter !== counterValue.startValue) {
        resetButtonStyle = false
    }

    const incrementCount = () => {
        dispatch(incrementCounterAC({counter: counterValue.counter }))
        // counterValue.counter += 1
        // setCounterValue({...counterValue})

    }
    const resetCounter = () => {
        dispatch(resetCounterAC({initialCounterValue: counterValue.startValue}))
    }

    return (
        <div className={'wrapper'}>
            <div className='counter-wrapper'>
                {changeAndError == '' &&  <span className={maxCounterStyle ? 'max-count' : 'counter-style'}>{counterValue.counter}</span>}
                {changeAndError == 'change' && <span className={'message-style'}>Enter values and press 'Set'</span>}
                {changeAndError == 'error' && <span className={'message-error-style'}>Incorrect value!!!</span>}

            </div>
            <div className="button-wrapper">
                <Button title={'inc'} onclick={incrementCount} className={'button'} disabled={maxCounterStyle}/>
                <Button title={'reset'} onclick={resetCounter} className={'button'} disabled={resetButtonStyle}/>
            </div>
        </div>
    );
};