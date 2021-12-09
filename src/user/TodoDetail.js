import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';

const TodoDetail = (props) =>{
    const id = props.match.params.id;
    const initial = {
        title:''
    }
    const { id:todid } = useParams(initial);
    const [todosDetail, setTodosDetail] = useState('');

    useEffect(() => {
        getRequest();
     }, [])

    const getRequest = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
            setTodosDetail(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        let newData = todosDetail;
        newData={
            ...newData,
            title:event.target.value
        }
        setTodosDetail(newData)

    }
    const handaleEdit = async () =>{
        try {
            const resp = await axios.put('https://jsonplaceholder.typicode.com/todos/1', todosDetail);
            console.log(resp.data);
        } catch (err) {
            console.error(err);
        }
    }
    const handaleDelete = async () =>{
        try{
            const resp = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            console.log(resp.data);
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div>
            <div>
                Todo :  {todosDetail.id}
            </div>
            <div>
                Todo Title : <input value={todosDetail.title} onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <span><button onClick={handaleEdit}>Edit</button></span>
                <span><button onClick={handaleDelete}>Delete</button></span>

            </div>
        </div>
    )
}
export default TodoDetail;