import {ChangeEvent} from "react";


type InputProps = {
    value: number
    setValue: (value: number) => void
    type: string
    setButtonDisabled: (status: boolean) => void
};

export const Input = ({value, setValue, type, setButtonDisabled}: InputProps) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setButtonDisabled(false)
        const valueForString = event.currentTarget.value
        setValue(JSON.parse(valueForString))
    }
    return (
        <input type={type} value={value} onChange={onChangeInputHandler}/>
    );
};