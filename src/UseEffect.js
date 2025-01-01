//use effect
import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
  const [clicked, setClicked] = useState(''); // Initialize state with an empty string
 const [count , setCount]=useState('');



  // Runs only on the initial render
  useEffect(() => {
    console.log(' we are in Use state');
    return(
      ()=>{
console.log("return jun of use state");
      }
  )

  },[clicked,count]); // Dependency array ensures this runs only once
 
  return (
    <div>
      <button onClick={() => setClicked('Subscribe')}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked('To')}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked('DropXout')}>DropXout</button>
      <h1>{clicked}</h1>
      <button onClick={()=>{setCount(count+1)}}>
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffectExample;
