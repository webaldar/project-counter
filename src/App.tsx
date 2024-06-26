import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {FullSet} from "./components/FullSet";

type CounterType = {
    counter: number
    startValue: number
    maxValue: number
}
export type changeAndErrorType =  'change' | 'error' | ''

function App() {
    let maxCounterStyle: boolean = false
    let resetButtonStyle: boolean = true

    const [counter, setCounter] = useState<CounterType>(
        { counter: 0,
                    startValue: 0,
                    maxValue: 1,
        }
    )
    const [changeAndError, setChangeAndError] = useState<changeAndErrorType>('')
    const setRange = (sValue: number, mValue: number) => {
        let obj = {
            counter: sValue,
            startValue: sValue,
            maxValue: mValue,
        }
        setCounter(obj)
    }

    if (counter.counter === counter.maxValue) {
        maxCounterStyle = true
    }
    if (counter.counter !== counter.startValue) {
        resetButtonStyle = false
    }

    const incrementCount = () => {
        counter.counter += 1
        setCounter({...counter})

    }
    const counterReset = () => {
        counter.counter = counter.startValue
        setCounter({...counter})
    }


    return (
        <div className="App">
            <FullSet setRange={setRange} setChangeAndError={setChangeAndError}/>

            <div className={'wrapper'}>
                <div className='counter-wrapper'>
                    { changeAndError == '' && <span className={maxCounterStyle ? 'max-count' : 'counter-style'}>{counter.counter}</span>}
                    { changeAndError == 'change' && <span className={'message-style'}>Enter values and press 'Set'</span>}
                    { changeAndError == 'error' && <span className={'message-error-style'}>Incorrect value!!!</span>}

                    {/*<span className={maxCounterStyle ? 'max-count' : 'counter-style'}>{counter.counter}</span>*/}
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
