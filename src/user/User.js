import axios from 'axios';
import React , {useEffect,useState} from 'react'

const User = (props)=>{
    const initial = {
        name:'',
        email:'',
        address:{
            city:''
        }
    } 
    const [users, setUsers] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    let id = props.match.params.id;

    useEffect(() => {
        loadUserDetail();
    }, [])
    const loadUserDetail =()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>{
            setUsers(res.data)   ;
            setLoading(true);
        })
        }
    const handleChange = (event) => {
        const {name, value} = event.target;
         console.log(name + ' '+ value);
         
    }
    return (
        <div>
            <form>
            <div>
                name: <input type="text"
                        value={users.name} 
                        name="name"
                        onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                Email: <input type="text"
                        value={users.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                        />
            </div>
            <div>
                City: <input type="text"
                             value={users.address.city}
                             name="city"
                             onChange={(e) => handleChange(e)}
                             />
            </div>
            <div>
                <button value="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}
export default User;