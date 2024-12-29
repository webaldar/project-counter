import {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {setStatusAC} from "./changeAndError-redeucer";

type InputProps = {
    value: number
    setValue: (value: number) => void
    type: string
    setButtonDisabled: (status: boolean) => void
};

export const Input = ({value, setValue, type, setButtonDisabled }: InputProps) => {

    // const changeAndError = useSelector<RootState, ChangeAndErrorType>(state => state.changeAndError)

    const dispatch = useDispatch()
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setButtonDisabled(false)
        dispatch(setStatusAC({value: 'change'}))
        const valueForString = event.currentTarget.value
        setValue(JSON.parse(valueForString))
    }
    return (
        <input type={type} value={value} onChange={onChangeInputHandler}/>
    );
};