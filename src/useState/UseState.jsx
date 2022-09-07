import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    console.log('onClicking useState Rendered');

    return (
        <>
        <p>Usestate hook is used to track the state or the data of the functional components</p>
        <p>It fist take initial value and returns two values 1st is a state and second one is a function to update the state</p>
        <p>but it has a one drawback that whenever the state changes our whole component get re-rendered each time and sometime it will caught on in infinite re-rendering loop</p>
        <p>Lets see one example,</p>
            <h1>counter</h1>
            <h2>{count}</h2>
            <button onClick={() => { setCount(count + 1) }}>INC</button>
            <button onClick={() => { setCount(count - 1) }}>Dec</button>
        </>
    )
}

export default UseState