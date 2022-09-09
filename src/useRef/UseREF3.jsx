import React, { useState, useEffect, useRef } from "react";


function UseREF3() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
        <h3>Tracking State Changes✅</h3>
            <p>The useRef Hook can also be used to keep track of previous state values.
                This is because we are able to persist useRef values between renders.</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>

            <p>This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.
                In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.</p>
        </>
    );
}
export default UseREF3;
