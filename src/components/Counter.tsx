import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {setRangeAC} from "../model/counter-reducer";
import {SettingBlock} from "./SettingBlock";
import {DisplayAndControlBlock} from "./DisplayAndControlBlock";
function Counter() {

    return (
        <>
            <SettingBlock/>
            <DisplayAndControlBlock/>
        </>
    );
}

export default Counter;