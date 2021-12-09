import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = (props) => {
const [data, setData] = useState('');
const [loading, setLoading] = useState(false);
const [errorMsg, setErrorMsg] = useState("");

useEffect(() => {
fetchAllUserDetails();
}, [])


 const fetchAllUserDetails = () => {
       setLoading(false);
       axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>{
        setData(res.data);
        setLoading(true);
       }).catch((error) => {
           console.log(error)
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
           <ul>
                {data.map(user => (
                <li key={user.id}>
                   <Link to={`/user/${user.id}`}>{user.name} </Link> 
                </li>
                ))}
            </ul>
        </div>
    )
}



export default Home;