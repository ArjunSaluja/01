import React from 'react'
import {GreetContext} from './A'
export default function C() {
    
  return (
<GreetContext.Consumer>
{
    (val)=>{
        return<h1>Greet: {val}</h1>
    }
}

</GreetContext.Consumer>
  )
}
