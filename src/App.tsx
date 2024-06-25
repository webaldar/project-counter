import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";


function App() {
    const [counter, setCounter] = useState<number>(0)

    let maxCounterStyle: boolean = false
    let resetButtonStyle: boolean = true
    if (counter === 5) {
        maxCounterStyle = true
    }
    if (counter !== 0) {
        resetButtonStyle = false
    }

    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const incrementCount = () => {
        setCounter(counter + 1)
    }
    const counterReset = () => {
        setCounter(0)
    }
    return (
        <div className="App">
            <div className={'wrapper'}>
                <div className='counter-wrapper'>
                    <div className={'flex-wrapper'}>
                        <span className={'message'}>max value</span>
                        <Input value={maxValue} type={'number'} setValue={setMaxValue}/>
                    </div>
                    <div className={'flex-wrapper'}>
                        <span  className={'message'}>start value</span>
                        <Input value={startValue} type={'number'} setValue={setStartValue}/>
                    </div>
                </div>
                <div className="button-wrapper">
                    <Button title={'set'} onclick={incrementCount} className={'button'} disabled={maxCounterStyle}/>

                </div>
            </div>
            <div className={'wrapper'}>
                <div className='counter-wrapper'>
                    <span className={maxCounterStyle ? 'max-count' : 'counter-style'}>{counter}</span>
                </div>
                <div className="button-wrapper">
                    <Button title={'inc'} onclick={incrementCount} className={'button'} disabled={maxCounterStyle}/>
                    <Button title={'reset'} onclick={counterReset} className={'button'} disabled={resetButtonStyle}/>
                </div>
            </div>

        </div>
    );
}

export default App;

// export type FilterValuesType =  'all' | 'active' | 'completed'
// export type TasksType = {
//     id: string
//     title: string
//     isDone: boolean
// }
// let tasks1: Array<TasksType> = [
//     { id: v1(), title: 'HTML&CSS', isDone: true },
//     { id: v1(), title: 'JS', isDone: true },
//     { id: v1(), title: 'ReactJS', isDone: false },
//     { id: v1(), title: 'Redux', isDone: false },
// ]
//
// function App() {
//     const [tasks, setTasks] = useState(tasks1)
//     const [filter, setFilter] = useState<FilterValuesType>('all')
//
//     let tasksForTodolist = tasks
//     if(filter === 'active') {
//         tasksForTodolist = tasks.filter(task => !task.isDone)
//     }
//     if(filter === 'completed') {
//         tasksForTodolist = tasks.filter(task => task.isDone)
//     }
//
//     const changeFilter = (filter: FilterValuesType) => {
//         setFilter(filter)
//     }
//     const removeTask = (taskId: string) => {
//         const filteredTasks = tasks.filter(task => {
//             return task.id !== taskId
//         })
//         setTasks(filteredTasks)
//     }
//     const addTask = (title: string) => {
//         const newTask = { id: v1(), title, isDone: false }
//         setTasks([newTask, ...tasks])
//     }
//     const changeTaskStatus = (taskId : string, taskStatus: boolean) => {
//         const newTasks = tasks.map(t => (t.id === taskId ? {...t, isDone: taskStatus} : t))
//         setTasks(newTasks)
//
//     }
//     return (
//         <div className="App">
//             <Todolist
//                 title={'What to learn'}
//                 tasks={tasksForTodolist}
//                 removeTask={removeTask}
//                 changeFilter={changeFilter}
//                 addTask={addTask}
//                 changeTaskStatus={changeTaskStatus}
//                 filter={filter}/>
//         </div>
//     );
// }
//
// export default App;
