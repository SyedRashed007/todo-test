import React, {useState, useEffect} from 'react'
import CreateTask from '../modals/CreateTask'

function Header() {

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

    return (
        <>
            <div className="text-center">
                <h1 className="header text-center">To Do List</h1>
                <button type="button" class="btn btn-primary mt-2" onClick={() => setModal(true)}>Add Todo</button>
            </div>
            <div className="task-container">
            {
                taskList.map((obj) => <li>{obj.Name}</li>)
            }
                <CreateTask modal={modal} toggle={toggle} save={saveTask}/>
            </div>
        </>
    )
}

export default Header
