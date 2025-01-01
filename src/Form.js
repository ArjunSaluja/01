import React, { useState } from 'react'

const Form = () => {
  // const{name,setName}=useState("");
  // const{email,setEmail}=useState("");
  
  const[formData , setFormData]=useState({
    name:'',
    email:'',
    


  })
  // const handlechange=(e)=>{
  //   console.log(e.target.value);
  //   setName(e.target.value);

  // }
  // const handleemail=(e)=>{
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
const handleInput=(e)=>{
  const{name,value}= e.target;
  setFormData({...formData, [name]:value
  })
}
  
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text'name ="name"value={formData.name} onChange={handleInput}/>
      </label>
      
      <label>
        Email:
        <input type='email' name="email"value={formData.email} onChange={handleInput}/>
      </label>
      
      <button type='submit'>Submit</button>
        
    </form>
  )
}


export default Form;
