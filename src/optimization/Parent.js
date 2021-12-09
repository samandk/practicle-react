import React,{useState,useCallback} from 'react'
import Child from './Child';

const Parent = () => {
    console.log('Parent Component Render');
    const [counter, setCounter] = useState(0);
    const [input , setInput] = useState('');

    const updateCounter = useCallback(
        () => setCounter(counter + 1)
    ,[counter])

    //Testing Error bound
    // if(counter === 2) {
    //     throw new Error("Sample Error")
    // }
    return (
        <div>
            <h1>Parent counter {counter}</h1>
            <button onClick={() => setCounter(counter + 1)} > +1 </button>
            <input type="text" onChange={e => setInput(e.target.value)}/>
            <Child counter={counter} updateCounter={updateCounter}/>
        </div>
    )
}
export default Parent;