import {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import {changeAndErrorType, counterValueType} from "./Counter";

export type counterSettingValueType = {
    maxValue: number
    startValue: number
}

type SettingBlockProps = {
    setRange: (startValue: number, maxValue: number) => void
    setChangeAndError: (param: changeAndErrorType) => void
    counterValue: counterValueType
};
let buttonDisabled = true
export const SettingBlock = ({setRange, setChangeAndError, counterValue}: SettingBlockProps) => {

    const [maxValue, setMaxValue] = useState(counterValue.maxValue)
    const [startValue, setStartValue] = useState(counterValue.startValue)
    let setButtonDisabled = (status: boolean) => {
        buttonDisabled = status
    }

    if(startValue < 0 || maxValue <= 0 || startValue >= maxValue ){
        setChangeAndError('error')
        setButtonDisabled(true)
    }
    const onclickSetButtonHandler = () => {
        setButtonDisabled(true)
        setChangeAndError('')
        setRange(startValue, maxValue)
    }

    return (
        <div className={'wrapper'}>
            <div className='counter-wrapper'>
                <div className={'flex-wrapper'}>
                    <span className={'message'}>max value</span>
                    <Input  value={maxValue} type={'number'} setValue={setMaxValue}
                            setButtonDisabled={setButtonDisabled} setChangeAndError={setChangeAndError} />
                </div>
                <div className={'flex-wrapper'}>
                    <span className={'message'}>start value</span>
                    <Input value={startValue} type={'number'} setValue={setStartValue}
                           setButtonDisabled={setButtonDisabled} setChangeAndError={setChangeAndError}/>
                </div>
            </div>
            <div className="set-button-wrapper">
                <Button title={'set'} onclick={onclickSetButtonHandler} className={'button'} disabled={buttonDisabled}/>
            </div>
        </div>
    );
};