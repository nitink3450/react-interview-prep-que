import React, { useRef, useEffect, useState } from 'react'

const UseRef2 = () => {
    const inputElement = useRef(0);
    const [value, setValue] = useState('')
    // const [count, setCount] = useState(0)
    console.log('UseState rendered');

    useEffect(() => {
        inputElement.current = inputElement.current + 1;
    }, [value])

    return (
        <>
            <h2>Does Not Cause Re-renders✅</h2>
            <h3>Component Re-Rendered : {inputElement.current} times</h3>
            <h3>My input values is :  {value.toUpperCase()}</h3>
            <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
            {/* <h3>{count}</h3> */}
            {/* <button onClick={()=>{setCount(count + 1)}}>click</button>  */}
        </>
    )
}

export default UseRef2