import React,{useState,useEffect} from 'react'
import './index.css'

function ToDoList() {

    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask]=useState("")

    useEffect(() => {
       
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
          setTasks(storedTasks);
        }
      }, []);
    
      useEffect(() => {
       
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

    function handleInputChange(event){

        setNewTask(event.target.value)
       
        

    }
    
    function addTask(){

        if(newTask.trim()!==""){

            setTasks([...tasks,{name:newTask,completed:false}])
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
    function completion(index){

        var updateTasks=[...tasks]

        updateTasks[index].completed= !updateTasks[index].completed
        setTasks(updateTasks)

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
            {tasks.map((task,index)=><li key={index}>
                    <input type="checkbox" onChange={()=>completion(index)} checked={task.completed} id="tick" className="checkBox" /><span className="text" style={{textDecoration :task.completed ?'line-through' : 'none'}}>{task.name}</span>
                    <button onClick={()=>deleteTask(index)} className="delete-button">Delete</button>
                    <button onClick={()=>moveTaskUp(index)} className="move-button">👆</button>
                    <button onClick={()=>moveTaskDown(index)} className="move-button">👇</button>
                    </li>)}
            
        </ol>
        
      
      
    </div>
  )
}

export default ToDoList
