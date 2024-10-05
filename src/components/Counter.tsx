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
    let maxCounterStyle: boolean = false
    let resetButtonStyle: boolean = true

    const [counterValue, setCounterValue] = useState<counterValueType>(
        {
            counter: 0,
            startValue: 0,
            maxValue: 1,
        }
    )
    const [changeAndError, setChangeAndError] = useState<changeAndErrorType>('')
    const setRange = (sValue: number, mValue: number) => {
        let obj = {
            counter: sValue,
            startValue: sValue,
            maxValue: mValue,
        }
        setCounterValue(obj)
    }

    if (counterValue.counter === counterValue.maxValue) {
        maxCounterStyle = true
    }
    if (counterValue.counter !== counterValue.startValue) {
        resetButtonStyle = false
    }

    const incrementCount = () => {
        counterValue.counter += 1
        setCounterValue({...counterValue})

    }
    const counterReset = () => {
        counterValue.counter = counterValue.startValue
        setCounterValue({...counterValue})
    }

    return (
        <>
            <SettingBlock setRange={setRange} setChangeAndError={setChangeAndError}/>
            <DisplayAndControlBlock changeAndError={changeAndError}
                                    setChangeAndError={setChangeAndError}
                                    maxCounterStyle={maxCounterStyle}
                                    counterValue={counterValue}
                                    incrementCount={incrementCount}
                                    counterReset={counterReset}
                                    resetButtonStyle={resetButtonStyle}
            />
        </>
    );
}

export default Counter;