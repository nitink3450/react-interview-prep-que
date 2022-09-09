import React, { useRef } from 'react'
//By using useRef Hook now we can access a DOM element directly like change of input text ,foucus on input on clicking button etc
const UseRef1 = () => {
    const inputRef = useRef(null);
    const handleInput = () => {
        console.warn('handleInput Function called');
        inputRef.current.focus();
        inputRef.current.style.color='red';
        inputRef.current.style.backgroundColor='yellow';
        console.log(inputRef.current.previousSibling);
        
    }
    return (
        <>
        <h2>Accessing DOM Elements✅</h2>
            <p>The useRef Hook allows you to persist values between renders.
                It can be used to store a mutable value that does not cause a re-render when updated.
                It can be used to access a DOM element directly.</p>
            <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                To avoid this, we can use the useRef Hook.</p>
            <p>useRef Hook create a mutable variable which will not re-render the components</p>
            <p>By using useRef Hook now we can access a DOM element directly like change of input text ,foucus on input on clicking button etc</p>
            <p>useRef Value always return a Object with current value e.g( Current:initial value)</p>
            <input type="text" ref={inputRef} />
            <button  onClick={handleInput}>Handle Input</button>
        </>
    )
}

export default UseRef1;