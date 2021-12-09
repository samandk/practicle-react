import React from 'react'

 const Child = (props) => {

    console.log("Child Component Rendering");
    return (
        <div style={{border : `1px solid red `, width:'200px',height:'200px'}}>
            <h1> Child </h1>
            <button onClick={props.updateCounter}> Child button </button>
        </div>
    )
}
export default React.memo(Child);