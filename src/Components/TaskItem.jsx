import React from 'react';
function TaskItem({taskname,taskComplete,taskDelete}){
    return(
        <>
            <li className="task-item">
            <div className="task-name">
                {taskname}
            </div>
            <div className="task-item-btns" >
              <button type="button" className="btn btn-success" onClick={()=>{taskComplete(taskname)}}>Complete</button>
              <button type="button" className="btn btn-danger" onClick={()=>{taskDelete(taskname)}}>Delete</button>
            </div>
           </li>
        </>
    )}
export default TaskItem