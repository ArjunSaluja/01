import React, { useReducer } from 'react'
const reducer=(state, action)=>{
console.log(state,action);
if(action.type==='incr'){
    return{count:state.count+1}
}
else if(action.type==='desc'){
    return{count:state.count-1}
}
else{
    throw new Error('Unsuported action type')
}
};
const Usereducer = () => {
    // // use state hmko array return karta hai 2 element
    // const [count, setCount]=useState(0);
    // console.log(count);
    // console.log(setCount);
    const [state,dispatch]=useReducer(reducer,{count:0});
    // reducer (coffee maker)function-it is pure function, we have 2 thingh state (coffe powder)and action(water)
    //new state(coffee)
    //pure function
    //10+10=20
    //no side effect

    const handleClickinc=()=>{
        dispatch({type:"incr"});
    }
    const handleClickdec=()=>{
        dispatch({type:"desc"});
    }


  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickinc} > +</button>
      <button onClick={handleClickdec} > -</button>
    </div>
  )
}

export default Usereducer;
