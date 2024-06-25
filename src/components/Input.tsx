import {ChangeEvent} from "react";


type InputProps = {
    value: number
    setValue: (value: number) => void
    type: string
};

export const Input = ({value, setValue, type}: InputProps) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const valueForString = event.currentTarget.value
        setValue(JSON.parse(valueForString))
    }
    return (
        <input type={type} value={value} onChange={onChangeInputHandler}/>
    );
};