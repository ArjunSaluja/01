import React from 'react'
import './Mobilelist.css'
export default function Mobilelist(props) {
   
  return (
    <div className='main'>
      {console.log(props)}
      
      <img className='image' src={props.image}/>
      <div>
      <h2> {props.title}</h2>
      <p>{props.price}</p>
      <button>  Add to cart</button>
      </div>
    </div>
  )
}
