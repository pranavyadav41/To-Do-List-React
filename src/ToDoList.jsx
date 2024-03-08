import React,{useState} from 'react'
import './index.css'

function ToDoList() {

    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask]=useState("")

    function handleInputChange(event){

        setNewTask(event.target.value)
       
        

    }
    
    function addTask(){

        if(newTask.trim()!==""){

            setTasks([...tasks,newTask])
            setNewTask("")
    

        }

       

    }
    
    function deleteTask(index){

        setTasks(tasks.filter((task,i)=>{
           return  i!==index
        }))

    }
    
    function moveTaskUp(index){

        if(index>0){
            const updatedTasks=[...tasks]

            const temp=updatedTasks[index]
            updatedTasks[index]=updatedTasks[index-1]
            updatedTasks[index-1]=temp

            setTasks(updatedTasks)
        }

    }
    
    function moveTaskDown(index){
        
        if(index<tasks.length-1){
            const updatedTasks=[...tasks]

            const temp=updatedTasks[index]
            updatedTasks[index]=updatedTasks[index+1]
            updatedTasks[index+1]=temp

            setTasks(updatedTasks)
        }

    }
    
    return (
    <div className="to-do-list">
        
        <h1>TO-DO-LIST</h1>

        <div>
            <input type="text" placeholder='Enter a task..'
            value={newTask} onChange={handleInputChange} />
            <button onClick={addTask} className="add-button">
               Add 
            </button>
        </div>
        <ol>
            {tasks.map((task,index)=><li key={index}><span className="text">{task}</span>
                    <button onClick={()=>deleteTask(index)} className="delete-button">Delete</button>
                    <button onClick={()=>moveTaskUp(index)} className="move-button">👆</button>
                    <button onClick={()=>moveTaskDown(index)} className="move-button">👇</button>
                    </li>)}
            
        </ol>
      
      
    </div>
  )
}

export default ToDoList
