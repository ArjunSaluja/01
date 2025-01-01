import React, { useState } from 'react'

const App1 = () => {
    // use state hmko array return karta hai 2 element
    const [count, setCount]=useState(0);
    console.log(count);
    console.log(setCount);

    const handleClickinc=()=>{
        setCount(count+1);
    }
    const handleClickdec=()=>{
        setCount(count-1);
    }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickinc} > +</button>
      <button onClick={handleClickdec} > -</button>
    </div>
  )
}

export default App1
