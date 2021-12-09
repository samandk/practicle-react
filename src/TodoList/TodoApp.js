import React,{useState} from 'react'
import data from './data.json';
 const TodoApp = () => {
     const [todoList, setTodoList] = useState(data);

    const toggleTask = (index) =>{
         const newTask = [...todoList];
          newTask[index].complete = !newTask[index].complete;
          setTodoList(newTask);
     }
    return (
        <>
            <h1>To Do List</h1>
            {
            todoList.map((todo,index) => {
                return (
                    <>
                    <div style={{display:'flex'}}>
                    <p className={todo.complete ? "strike" : "" }
                            key ={index}
                            onClick={() => toggleTask(index)}
                     > { todo.task }</p>
                        &nbsp;
                        <button style={{marginTop:'20px',height:'20px'}} > Cancel </button>
                    </div>

                    </>
                )
            })
            }
        </>
    )
}
export default TodoApp;