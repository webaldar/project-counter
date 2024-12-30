import {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {setButtonStatusAC} from "./buttonControl-reducer";
import {setStatusAC} from "./changeAndError-redeucer";

type InputProps = {
    value: number
    setValue: (value: number) => void
    type: string
};

export const Input = ({value, setValue, type }: InputProps) => {

    // const changeAndError = useSelector<RootState, ChangeAndErrorType>(state => state.changeAndError)

    const dispatch = useDispatch()
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setButtonStatusAC({value: false}))
        dispatch(setStatusAC({value: 'change'}))
        const valueForString = event.currentTarget.value
        setValue(JSON.parse(valueForString))
    }
    return (
        <input type={type} value={value} onChange={onChangeInputHandler}/>
    );
};