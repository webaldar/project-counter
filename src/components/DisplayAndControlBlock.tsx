// @flow 
import * as React from 'react';
import {Button} from "./Button";
import {changeAndErrorType, counterValueType} from "./Counter";

type DisplayAndControlBlockProps = {
    changeAndError: changeAndErrorType
    counterValue: counterValueType
    incrementCount: () => void
    counterReset: () => void
};
export const DisplayAndControlBlock = ({
                                           changeAndError,
                                           counterValue,
                                           incrementCount,
                                           counterReset,
                                       }: DisplayAndControlBlockProps) => {

    let maxCounterStyle: boolean = false
    let resetButtonStyle: boolean = true

    if (counterValue.counter === counterValue.maxValue) {
        maxCounterStyle = true
    }
    if (counterValue.counter !== counterValue.startValue) {
        resetButtonStyle = false
    }
    if (changeAndError == 'change' || changeAndError == 'error') {
        maxCounterStyle = true
        resetButtonStyle = true
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
                <Button title={'reset'} onclick={counterReset} className={'button'} disabled={resetButtonStyle}/>
            </div>
        </div>
    );
};