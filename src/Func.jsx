import React, { useState } from 'react';

let  Func = () => {
    // useState = this hook is used to add state in a component
    let [count,setCount]=useState(10)
    let [names,setNames]=useState(["raj","jwalamukhi","hunter"])
    let [data,setData]=useState(
       { name:"ram",
        age:67}
    )
    return (
        <>
        <h3>Hello Func</h3>
        <button onClick={()=>{setCount(count+1)}}>increment</button>
        <p>count:{count}</p>
        <button onClick={()=>{setCount(count-1)}}>decrement</button>

        <h4> Names:{names.join(" , ")}</h4>
        <button onClick={()=>{setNames([...names,"naman"])}}>Add name</button>
        <button onClick={()=>{setNames(names.slice(0, names.length-1)) }}>remove name</button>
        <p>name:{data.name}</p>
        <p>age:{data.age}</p>

        <button onClick={()=>{setData({...data,name:"naman",age:data.age+1})}}>Add name</button>


            
        </>
    );
}


export default Func;