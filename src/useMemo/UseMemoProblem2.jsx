import React, {useState} from 'react';

function UseMemoProblem2() {
const [number, setNumber] = useState(0)
const squaredNum = squareNum(number);
const [counter, setCounter] = useState(0);

// Change the state to the input
const onChangeHandler = (e) => {
	setNumber(e.target.value);
}
	
// Increases the counter by 1
const counterHander = () => {
	setCounter(counter + 1);
}
return (
	<div className="App">
	<h1>UseMemo Problem(without UseMemo)</h1>
	<input type="number" placeholder="Enter a number"
		value={number} onChange={onChangeHandler}>
	</input>
		
	<div>OUTPUT: {squaredNum}</div>
	<button onClick= {counterHander}>Counter ++</button>
	<div>Counter : {counter}</div>
	</div>
);
}

// function to square the value
function squareNum(number){
console.log("Squaring will be done!");
return Math.pow(number, 2);
}

export default UseMemoProblem2;
//In the above example, we have an App component and this component is doing two things one is squaring a number on the given input and incrementing the counter. We have two states here number and counter, whenever any of the states change the component re-renders. For example, if we change the input value of the number the function squareNum runs, and if increment the counter again the function squareNum runs. We can see this on the console. 
//In this case, we can see that even if we changed the input number once, but clicked on-increment counter multiple times our function squareNum got executed whenever we clicked the increment counter button multiple times. This is happening because the App component re-renders whenever we change the state of the counter.