import React, {useEffect, useState} from 'react';
import {SettingBlock} from "./SettingBlock";
import {DisplayAndControlBlock} from "./DisplayAndControlBlock";

export type changeAndErrorType = 'change' | 'error' | ''

export type counterValueType = {
    counter: number
    startValue: number
    maxValue: number
}

function Counter() {
    const getSavedCounterValue = () => {
        const savedCounter = localStorage.getItem('counterValue');
        let parsedCounter = 0;

        if (savedCounter) {
            try {
                parsedCounter = JSON.parse(savedCounter);
            } catch (e) {
                console.error("Error parsing saved counter value from localStorage:", e);
                parsedCounter = 0;
            }
        }

        return parsedCounter;
    };

    const getSavedStartValue = () => {
        const savedCounter = localStorage.getItem('counterStartValue');
        let parsedCounter = 0;

        if (savedCounter) {
            try {
                parsedCounter = JSON.parse(savedCounter);
            } catch (e) {
                console.error("Error parsing saved counter value from localStorage:", e);
                parsedCounter = 0;
            }
        }

        return parsedCounter;
    };
    const getSavedMaxValue = () => {
        const savedCounter = localStorage.getItem('counterMaxValue');
        let parsedCounter = 0;

        if (savedCounter) {
            try {
                parsedCounter = JSON.parse(savedCounter);
            } catch (e) {
                console.error("Error parsing saved counter value from localStorage:", e);
                parsedCounter = 0;
            }
        }

        return parsedCounter;
    };



    const [counterValue, setCounterValue] = useState<counterValueType>(
        {
            counter: getSavedCounterValue(),
            startValue: getSavedStartValue(),
            maxValue: getSavedMaxValue(),
        }
    )
    const [changeAndError, setChangeAndError] = useState<changeAndErrorType>('')

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counterValue.counter))
        localStorage.setItem('counterStartValue', JSON.stringify(counterValue.startValue))
        localStorage.setItem('counterMaxValue', JSON.stringify(counterValue.maxValue))
    }, [counterValue])

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
            <SettingBlock setRange={setRange} setChangeAndError={setChangeAndError} counterValue={counterValue}/>
            <DisplayAndControlBlock changeAndError={changeAndError}
                                    counterValue={counterValue}
                                    incrementCount={incrementCounter}
                                    counterReset={resetCounter}
            />
        </>
    );
}

export default Counter;