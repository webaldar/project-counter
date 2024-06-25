import {useState} from "react";
import {Input} from "./Input";

type SelektorProps = {
    
};
export const Selektor = ({}: SelektorProps) => {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    return (
        <div>
            <div>
                <span>max value</span>
                <Input value={maxValue} type={'number'} setValue={setMaxValue} />
            </div>
             <div>
                <span>max value</span>
                <Input value={startValue} type={'number'} setValue={setStartValue}/>
            </div>
        </div>
    );
};