import {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";

type FullSetProps = {
    setRange: (startValue: number, maxValue: number) => void
};
let buttonDisabled = true
export const FullSet = ({setRange}: FullSetProps) => {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    const onclickHandler = () => {
        setButtonDisabled(true)
        setRange(startValue, maxValue)
    }
    let setButtonDisabled = (status: boolean) => {
        buttonDisabled = status
    }
    return (
        <div className={'wrapper'}>
            <div className='counter-wrapper'>
                <div className={'flex-wrapper'}>
                    <span className={'message'}>max value</span>
                    <Input  value={maxValue} type={'number'} setValue={setMaxValue} setButtonDisabled={setButtonDisabled}/>
                </div>
                <div className={'flex-wrapper'}>
                    <span className={'message'}>start value</span>
                    <Input value={startValue} type={'number'} setValue={setStartValue} setButtonDisabled={setButtonDisabled}/>
                </div>
            </div>
            <div className="button-wrapper">
                <Button title={'set'} onclick={onclickHandler} className={'button'} disabled={buttonDisabled}/>
            </div>
        </div>
    );
};