import React, { createContext } from 'react'
import B from './B'
const GreetContext= createContext();
export default function A() {
    const greet="hello"
  return (
    <div>
        <GreetContext.Provider value={greet}>

        <B />
        </GreetContext.Provider>
      
    </div>
  )
}
export {GreetContext};
