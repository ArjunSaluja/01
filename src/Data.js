import React, { useState } from 'react';
import datas from'./datas.json';

const Data = () => {
    const [nData, setnData]=useState(datas);
    const handleclick=()=>{
      setnData([])
    }
    const handleremove=(itemId)=>{
      setnData(nData.filter(item=>item.id!==itemId))
    }
    const handlerupdate =(itemId)=>{
      setnData(nData.map(items=>{
        if(items.id=itemId){
          return {name:"newnameee"}
        }
        else{
          return items;
        }
      }))
    }
    console.log(datas);
  return (
    <div>
      <ul>
        {
          nData.map(items =>
            <li key={items.id}>
              {items.name}
              <br/>
              <button onClick={()=>handlerupdate(items.id)}>update</button>
              <button onClick={()=>handleremove(items.id)}>remove</button>
            </li>
          )
        }
      </ul>
      <button onClick={handleclick}>clear</button>
    </div>
  )
}

export default Data
