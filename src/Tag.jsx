import React from 'react'
//import { faTrash } from '@fortawesome/free-solid-svg-icons'
//<FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />

export default function Tag ({task, deleteTodo}){
  return (
    <div className="Todo">
        <p>{task.task}</p>
        <div className="delete-icon" onClick={() => deleteTodo(task.id)}>
        ✗
        </div>
    </div>
  )
}
