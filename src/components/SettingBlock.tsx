import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {setRangeAC} from "../model/counter-reducer";
import {ButtonControlType, setButtonStatusAC} from "./buttonControl-reducer";
import {setStatusAC} from "./changeAndError-redeucer";
import {Input} from "./Input";
import {Button} from "./Button";


// export type counterSettingValueType = {
//     maxValue: number
//     startValue: number
// }

export type ChangeAndErrorValueType = 'change' | 'error' | ''

export type ChangeAndErrorType = {
    changeAndError: ChangeAndErrorValueType }


// let buttonDisabled = true
export const SettingBlock = () => {
    // const changeAndError = useSelector<RootState, ChangeAndErrorType>(state => state.changeAndError)
    const buttonControl = useSelector<RootState, ButtonControlType>
    (state => state.buttonControl)

    const dispatch = useDispatch()

    const [maxValue, setMaxValue] = useState(1)
    const [startValue, setStartValue] = useState(0)
    // let setButtonDisabled = (status: boolean) => {
    //     dispatch(setButtonStatusAC({value: status}))
    //     // buttonDisabled = status
    // }

    if(startValue < 0 || maxValue <= 0 || startValue >= maxValue ){
        dispatch(setStatusAC({value: 'error'}))
        // setChangeAndError('error')
        // setButtonDisabled(true)
        dispatch(setButtonStatusAC({value: true}))
    }
    const onclickSetButtonHandler = () => {
        dispatch(setButtonStatusAC({value: true}))
        // setButtonDisabled(true)
        dispatch(setStatusAC({value: ''}))
        //setChangeAndError('')
        setRange(startValue, maxValue)
    }
    const setRange = (sValue: number, mValue: number) => {
        dispatch(setRangeAC({sValue, mValue}))
    }

    return (
        <div className={'wrapper'}>
            <div className='counter-wrapper'>
                <div className={'flex-wrapper'}>
                    <span className={'message'}>max value</span>
                    <Input  value={maxValue} type={'number'} setValue={setMaxValue}
                             />
                </div>
                <div className={'flex-wrapper'}>
                    <span className={'message'}>start value</span>
                    <Input value={startValue} type={'number'} setValue={setStartValue}
                           />
                </div>
            </div>
            <div className="set-button-wrapper">
                <Button title={'set'} onclick={onclickSetButtonHandler} className={'button'} disabled={buttonControl.setButton}/>
                {/*<Button title={'set'} onclick={onclickSetButtonHandler} className={'button'} disabled={buttonDisabled}/>*/}
            </div>
        </div>
    );
};