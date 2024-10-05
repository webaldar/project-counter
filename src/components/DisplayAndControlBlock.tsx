// @flow 
import * as React from 'react';
import {Button} from "./Button";
import {changeAndErrorType, counterValueType} from "./Counter";

type DisplayAndControlBlockProps = {
    changeAndError: changeAndErrorType
    setChangeAndError: (param: changeAndErrorType) => void
    counterValue: counterValueType
    maxCounterStyle: boolean
    incrementCount: () => void
    counterReset: () => void
    resetButtonStyle: boolean
};
export const DisplayAndControlBlock = ({
                                           changeAndError,
                                           setChangeAndError,
                                           counterValue,
                                           maxCounterStyle,
                                           incrementCount,
                                           counterReset,
                                           resetButtonStyle
                                       }: DisplayAndControlBlockProps) => {

    return (
        <div className={'wrapper'}>
            <div className='counter-wrapper'>
                {changeAndError == '' &&
                    <span className={maxCounterStyle ? 'max-count' : 'counter-style'}>{counterValue.counter}</span>}
                {changeAndError == 'change' && <span className={'message-style'}>Enter values and press 'Set'</span>}
                {changeAndError == 'error' && <span className={'message-error-style'}>Incorrect value!!!</span>}

                {/*<span className={maxCounterStyle ? 'max-count' : 'counter-style'}>{counter.counter}</span>*/}
            </div>
            <div className="button-wrapper">
                <Button title={'inc'} onclick={incrementCount} className={'button'} disabled={maxCounterStyle}/>
                <Button title={'reset'} onclick={counterReset} className={'button'} disabled={resetButtonStyle}/>
            </div>
        </div>
    );
};