import React, {useState,useMemo} from 'react';
// The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.
function UseMemoSolution2() {
const [number, setNumber] = useState(0)
// Using useMemo
const squaredNum = useMemo(()=> {
	return squareNum(number);
}, [number])
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
	<h1>UseMemo Solution (with UseMemo)</h1>
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
export default UseMemoSolution2;

//Now in the above example, we have used the user memo hook, here the function that returns the value i.e squareNum is passed inside the useMemo and inside the array dependencies, we have used the number as the squareNum will run only when the number changes. If we increase the counter and the number remains the same in the input field the squareNum doesn’t run again. Let’s see the output below.
//Now we can see in the console that the squareNum is running only when there is a change in the input box and not when the button of the increment counter is clicked.
// Note: Memorization is never free, we are trading space for time. 
