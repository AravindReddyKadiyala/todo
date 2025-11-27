import { useState } from 'react'
import './App.css'
import TaskItem from './Components/TaskItem.jsx'
function App() {
  const [newTask,setNewTask]=useState("")
  const [myTasks,setMyTasks]=useState(["Reading a book","Writing some code","Going for a walk","Cooking dinner","Learning React"])
  const [completedTasks,setCompletedTasks]=useState([])
  function handleInput(e){
    setNewTask(e.target.value)
  }
  function addTask(){
    setMyTasks([...myTasks,newTask])
    setNewTask("")
  }
  function taskComplete(taskname){
    setCompletedTasks([...completedTasks,taskname])
    let updatedTasks=myTasks.filter((task)=>task!==taskname)
    setMyTasks(updatedTasks)
  }
  function taskDelete(taskname){
    let updatedTasks=myTasks.filter((task)=>task!==taskname)
    setMyTasks(updatedTasks)
  }
  return (
    <div className="main-body">
       <div className="todo-container">
        <h2 align="center">Todo App</h2>
        <div className="todo-input-container">
          <input type="text" placeholder="Enter the task" className="input" onChange={(e)=>{handleInput(e)}} value={newTask}/>
          <button type="button" className="btn btn-info" onClick={()=>{addTask()}} >Add task</button>
        </div> 
        <ul className="task-list">
          <h4>Tasks to be completed</h4>
          {
            myTasks.map((task,index)=>
            <TaskItem key={index} taskname={task} taskComplete={taskComplete} taskDelete={taskDelete}/>
            )
          }
          <hr />
          <h4>Completed Tasks</h4>
          <br />
          {
            completedTasks.map((task,index)=>
            <li key={index} className="completed-task-item">{task}</li>
            )
          }
        </ul>
       </div>
    </div>
  )
}
export default App
