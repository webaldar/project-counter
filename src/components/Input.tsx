import {ChangeEvent} from "react";
import {changeAndErrorType} from "./Counter";



type InputProps = {
    value: number
    setValue: (value: number) => void
    type: string
    setButtonDisabled: (status: boolean) => void
    setChangeAndError: (param: changeAndErrorType) => void
};

export const Input = ({value, setValue, type, setButtonDisabled, setChangeAndError }: InputProps) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setButtonDisabled(false)
        setChangeAndError('change')
        const valueForString = event.currentTarget.value
        setValue(JSON.parse(valueForString))
    }
    return (
        <input type={type} value={value} onChange={onChangeInputHandler}/>
    );
};