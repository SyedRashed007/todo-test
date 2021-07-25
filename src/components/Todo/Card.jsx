import React, {useState} from 'react'
import EditTask from '../modals/EditTask'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <div class = "task-holder">
                <Row>
                    <Col sm={10} class = "card-header">{taskObj.Name}</Col>
                    <Col sm={10} className = "mt-3">{taskObj.Description}</Col>
                    <Col sm={1} className="toggle">
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggled}>
                    <DropdownToggle caret>
                        Click here
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => setModal(true)}>Edit</DropdownItem>
                        <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                    </Col>
                </Row>
            </div>
                <EditTask modal = {modal} toggle = {toggle} updateTask={updateTask} taskObj = {taskObj}/>
       </div>
    )
}
export default Card