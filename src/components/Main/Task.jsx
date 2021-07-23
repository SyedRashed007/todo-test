import React from 'react'
import './Task.css'

function Task() {
    return (
        <>
            <div>
                <button type="button" class="btn btn-outline-primary">Add Todo</button>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">1</li>
                    <li class="list-group-item">2</li>
                    <li class="list-group-item">3</li>
                    <li class="list-group-item">4</li>
                    <li class="list-group-item">5</li>
                </ul>
            </div>
        </>
    )
}

export default Task
