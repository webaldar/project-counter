import React, {useState} from 'react';
import {SettingBlock} from "./SettingBlock";
import {DisplayAndControlBlock} from "./DisplayAndControlBlock";

export type changeAndErrorType = 'change' | 'error' | ''

export type counterValueType = {
    counter: number
    startValue: number
    maxValue: number
}

function Counter() {

    const [counterValue, setCounterValue] = useState<counterValueType>(
        {
            counter: 0,
            startValue: 0,
            maxValue: 1,
        }
    )
    const [changeAndError, setChangeAndError] = useState<changeAndErrorType>('')


    const setRange = (sValue: number, mValue: number) => {
        let newCounterValue = {
            counter: sValue,
            startValue: sValue,
            maxValue: mValue,
        }
        setCounterValue(newCounterValue)
    }

    const incrementCounter = () => {
        counterValue.counter += 1
        setCounterValue({...counterValue})

    }
    const resetCounter = () => {
        counterValue.counter = counterValue.startValue
        setCounterValue({...counterValue})
    }

    return (
        <>
            <SettingBlock setRange={setRange} setChangeAndError={setChangeAndError}/>
            <DisplayAndControlBlock changeAndError={changeAndError}
                                    counterValue={counterValue}
                                    incrementCount={incrementCounter}
                                    counterReset={resetCounter}
            />
        </>
    );
}

export default Counter;