import React from "react";
import Mobilelist from "./Mobilelist";
import books from './books.json';
function Mobile(){
    return(
        <div>

    {books.map((ele)=>{

return <Mobilelist
image={ele.image}
title={ele.title}
price={ele.price}
/>
    })}
</div>
        
    )
}
export default Mobile;