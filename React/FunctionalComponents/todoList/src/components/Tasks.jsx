import React, { useState, useEffect } from 'react';


const Tasks = props => {

    const [tasks, setTasks] = useState([{}])
    const [content, setContent] = useState("")
    const [completed, setCompleted] = useState(false)
    const [task, setTask] = useState({
        completed: false,
        content: ""
    })


    console.log(tasks)

    //#1 useEffect(): runs on first render, before #2
    useEffect( () => {
        const local_tasks = localStorage.getItem("tasks")
        if(local_tasks){
            setTasks(JSON.parse(local_tasks))
            // for(let i; i<local_tasks.length; i++){
            //     setTask({
            //         completed: local_tasks[i].completed,
            //         content: local_tasks[i].content
            //     })
            //     setTasks([...tasks, task])
            // }
            // console.log("refresh0")
        }
    }, [])

    //#2 useEffect(): runs on every render
    useEffect( ()=> {
        console.log("refresh1")
        updateLocalStorage(tasks)
    })

    const updateLocalStorage = (tasks_) =>{
        // localStorage.removeItem("tasks")
        if(tasks_.length > 1){
            localStorage.setItem("tasks", JSON.stringify(tasks_))
        }
    }
    const handleChange = (e) =>{
        setContent(e.target.value)
    }
    
    const createTask = (e) =>{
        e.preventDefault()
        const task = {
            completed: completed,
            content: content,
        }
        setTasks(
            [...tasks, task]
        )
    }

    const completedStyle = {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
    const incompletedStyle = {
        color: "black"
    }

    const checkCompleted = (idx) => {
        if(tasks[idx].completed){
            return true
        }
    }

    const handleCheckbox = (checked, id) => {
        let temp_tasks = [...tasks]
        let temp_task = temp_tasks[id]
        temp_task.completed = checked
        if(temp_task.content.length > 0){
            setTasks(
                [...temp_tasks]
            )
        }

    }

    const handleDelete = (e) => {
        e.preventDefault()
        let id = e.target.name
        let temp_tasks = [...tasks]
        temp_tasks.splice(id, 1)
        if(id==1){
            localStorage.removeItem("tasks")
        }
        setTasks(
            [...temp_tasks]
        )
    }

    return (
        <div>
            {/* form */}
            <div>
                <form onSubmit={createTask}>
                    <input type="text" name="task" id="task" onChange={handleChange}/>
                    <button>Add</button>
                </form>
            </div>

            {/* display */}
            <div>
                <ul>
                {tasks.map((task, idx) => {
                    return (
                        // <p key={idx}>{task.content}</p>
                        <div>
                        {task.content!=undefined? 
                            <li key={idx} style={{color:"black"}} 
                            style={checkCompleted(idx)? completedStyle: incompletedStyle}>
                                {task.content}
                                <input type="checkbox" checked={task.completed} onChange={e => handleCheckbox(e.target.checked,idx)} />
                                <button name={idx} onClick={handleDelete}>Delete</button>
                                {/* <a onClick={handleDelete(idx)}>Delete</a> */}
                            </li>: ""
                    
                        }


                        </div>

                    )
                })}
                </ul>

            </div>
        </div>
    );
};

export default Tasks;