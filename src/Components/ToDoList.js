import { useState } from "react"

const ToDoList = () => {
    const [tasks, settasks] = useState([]);
    const [newtask, setnewtask] = useState("");
    const [editedvalue, seteditedvalue] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const InputChange = (e) => {
        setnewtask(e.target.value)
    }

    const addTask = () => {
        if(newtask !== ""){
        settasks(tasks => [...tasks, newtask]);
        setnewtask("");
    }
}
const saveTask = () => {
    if (newtask !== "" && editedvalue !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editedvalue] = newtask;
        settasks(updatedTasks);
        setnewtask("");
        seteditedvalue(null);
        setIsEditing(false); 
    }
};


    const deleteTask = (index) => {
        const update = tasks.filter((_,ind) => ind !== index);
        settasks(update);
    }

    const up = (index) => {
        if (index>0){
            const update = [...tasks];
            [update[index], update[index - 1]] = [update[index - 1], update[index]];
            settasks(update);
        }
        
    }

    const down = (index) => {
        if (index<tasks.length-1){
            const update = [...tasks];
            [update[index], update[index + 1]] = [update[index + 1], update[index]];
            settasks(update);
        }
        
    }

    const edit = (index) => {
        setnewtask(tasks[index]);
        seteditedvalue(index);
        setIsEditing(true);
    };

    return(
        <div className="text-center m-10 ">
            <h1 className="text-2xl">To-Do-List</h1>
            <div className="">
            <input className="box-border h-3 m-4 w-42 p-4 border-4" type="text" placeholder="Enter Task" value={newtask} onChange={InputChange}/>
            {isEditing ? (
                    <button className="bg-black box-border h-10 mt-4 w-16 text-white" onClick={saveTask}>Save</button>
                ) : (
                    <button className="bg-black box-border h-10 mt-4 w-16 text-white" onClick={addTask}>Add</button>
                )}
            </div>
            <ol className="mt-4">
                {tasks.map((task,index) => {
                  return(  <li>
                 
                    <span> {task}</span>
                        <button onClick={()=> deleteTask(index)}>❌</button>
                        <button onClick={()=> up(index)}>⬆️</button>
                        <button onClick={()=> down(index)}>⬇️</button>
                        <button onClick={()=> edit(index)}>📝</button>
                    </li>
                )})}
                
            </ol>
            
        </div>
    )
}

export default ToDoList