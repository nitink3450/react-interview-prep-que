import React,{useReducer} from 'react';
const initialState = 0;
const Reducer2 =(state,action)=>{
    if(action.type === 'INC'){
        return state + 1
    }
    else if(action.type === 'DEC'){
        return state - 1
    }
    else{
        return state
    }
}
const reducer1 = () => {
    const [state, dispatch] = useReducer(Reducer2, initialState)
  return (
    <>
    <h1>counter</h1>
    <h1>{state}</h1>    
    <button onClick={()=>{dispatch({type:'INC'})}}>inc</button>
    <button onClick={()=>{dispatch({type:'DEC'})}}>dec</button>

    </>
  )
}

export default reducer1