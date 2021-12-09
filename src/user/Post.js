import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

 const Todo = ()=> {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [todos, setTodos] = useState('');
     useEffect(() => {
        loadtodoData();
     }, [])
     const handleCreate = async() =>{
        const newTodo = { 
            userId: 1,  
            title: 'Wash my hands',
            completed: false
        }
        try {
            const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
            const newtodo = [...todos, resp.data]
            setTodos(newtodo);
        } catch (err) {
            console.error(err.message);
        }
     }
    //  const handaleDelete = async () =>{
    //     try{
    //         const resp = await axios.delete(`https://jsonplaceholder.typicode.com/todos/1`);
    //         const newtodo = [...todos, resp.data]
    //         setTodos(newtodo);
    //     }catch(err){
    //         console.error(err);
    //     }
    // }
     const loadtodoData = () =>{
         //const url=`https://jsonplaceholder.typicode.com/todos`;
         const url= `https://jsonplaceholder.typicode.com/todos`;
         //axios.get(url)
        axios.get(url,{
                params: {
                  _limit: 10
                 }
              })
         .then((response) =>{
            setTodos(response.data);
            setLoading(true);
         }).catch((error) =>{
            setErrorMsg(error.message);
            setLoading(true);

         })
     }
      
    if (errorMsg) {
        return <div>Error: {errorMsg}</div>;
    }
    if(!loading){
        return <div> Loading ...</div>
    }
    return (
        <div>
            <h5>todos</h5>
            <ul>
                {
                    todos && todos.map(todo => {
                        return <li key={todo.id}> <Link to={`/todo/${todo.id}`}> {todo.title} </Link></li>
                    })
                }
            </ul>
            <button onClick={handleCreate}>Create New</button>
            {/* <button onClick={handaleDelete}>Delete</button> */}

        </div>
    )
}
export default Todo;