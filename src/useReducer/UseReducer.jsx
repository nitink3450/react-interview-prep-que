import React, { useReducer } from 'react'

const initialState = 0;
const Reducer = (state, action) =>{
    if(action.type === 'INC' ){
        return state + 1
    }
    else if(action.type === 'DEC' ){
        return state - 1
    }
    else{
        return state
    }
}
const UseReducer1 = () => {
   const [state, dispatch] = useReducer(Reducer,initialState)
    console.log('onClicking UseReducer Rendered');

    return (
        <>
        <p>UseReducer hook is same as the useState hook then why do we need it?</p>
        <p>We need it bcoz whenever there is more states we have to handle then we cannot use useState again and again it will make our code huge and may be it will decreace performance of the project</p>
        <p>but by using useReducer hook we can manage the infinite number of states easily</p>
        <p>use reducer contain one function and initial value it will return 2 values 1st is state and 2nd one is dispatch(it trigers the action)</p>
            <h1>counter</h1>
            <h2>{state}</h2>
            <button onClick={() =>{dispatch({type:'INC'})}}>INC</button>
            <button onClick={() =>{dispatch({type:'DEC'})}}>Dec</button>
        </>
    )
}

export default UseReducer1;