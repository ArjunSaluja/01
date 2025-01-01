import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [users,setusers]=useState([]);
    useEffect(()=>{
        fetch('https://api.gitub.com/users')
        .then(response =>response.json())
         .then(data=> setusers(data))
    },[])
  return (
    <div>
      <h1>User list</h1>
      <ul>
        {
            users.map(user=>{
                return <li key={user.id}>{user.login}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Fetch
