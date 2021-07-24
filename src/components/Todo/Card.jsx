import React, {useState} from 'react'
import EditTask from '../modals/EditTask'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false) 
    const [dropdownOpen, setOpen] = useState(false);

  const toggled = () => setOpen(!dropdownOpen);

    const handleDelete = () => {
        deleteTask(index)
    }
    const toggle = () => {
        setModal(!modal)
    }
    const updateTask = (obj) => {
        updateListArray(obj, index)
    }
    
    return(
        <div class = "card-wrapper">
            <div class = "task-holder">To Do <hr/>
               <span class = "card-header">{taskObj.Name}</span>
               <p className = "mt-3">{taskObj.Description}</p>
            </div>
            <div className="button">
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggled} >
                    <DropdownToggle caret className="toggle">
                        Click here
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => setModal(true)}>Edit</DropdownItem>
                        <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
                <EditTask modal = {modal} toggle = {toggle} updateTask={updateTask} taskObj = {taskObj}/>
       </div>
    )
}
export default Card