import React,{useState,useReducer} from 'react'
const reducer =(state,action)=>{
    switch (action.type) {

        case "addTodo":
            return {todos:[...state.todos,{text:action.text,completed:"false"}]} ;

        case "complete":
            return {todos:state.todos.map((idx,jdx)=> jdx===action.jdx ? {...idx,completed: action.completed}:idx
                ) 
            };

        case "delete":
            return {todos:state.todos.map((idx,jdx)=> jdx===action.jdx ?  {...idx.filter(idx => action.text !== idx.text )}:idx
                ) 
            };

        default:
            return state;
    }
}
const Todo = ()=>{

    const [{todos}, dispatch] = useReducer(reducer, { todos: [] })
    const [text, setText] = useState()

    const submit=(e)=>{
        e.preventDefault();
        dispatch ({type:"addTodo",payload:text})
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input type="text" onChange={e=>setText(e.target.value)} />
                <button>Add</button>
            </form>
            {todos.map((idx,jdx) =>(
            <div key={idx.text} style={{textDecoration:idx.completed ? "line-through" :""}}>
                idx.text
                <input type="checkbox" checked={jdx.complete} onChange={()=>dispatch({type:"complete",jdx}) }/>
                <button onClick={(e)=>dispatch({type:"delete",jdx})}>delete</button>
                </div>
            ))};
        </div>
    );
};

export default Todo;