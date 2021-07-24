import React, {useState, useEffect} from 'react'
import CreateTask from '../modals/CreateTask'
import Card from './Card'

function Todo() {

    const [modal, setModal] = useState(false)
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj,index) => {
        let tempList = taskList
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    return (
        <>
            <div className="text-center">
                <h1 className="header">To Do List</h1>
                <button type="button" class="btn btn-primary mt-2" onClick={() => setModal(true)}>Add Todo</button>
            </div>
            <div>
                <input className="search" placeholder="Search your todo"></input>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
            <div className="task-container">
            {
                taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)
            }
                <CreateTask modal={modal} toggle={toggle} save={saveTask}/>
            </div>
            
        </>
    )
}

export default Todo
