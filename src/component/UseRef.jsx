import { useRef,useState } from "react";
import React from 'react';

let UseRef=()=> {

    let con= useRef();
    let inp= useRef();
    // it always give us an object with one key {current:""}
    let [n,setN]=useState(0)
    let submithandler=()=>{
        con.current.style.color="red"
        inp.current.value=con.current.value
    }
    let count=useRef(0)
    let inc=()=>{
        count.current=count.current+1;
        console.log(count);
        if(count.current%10==0){
            setN(n+1)
        }
    }

    return (
        <>
        {console.log("render")}
        <button onClick={inc}>increment{count.current}</button>
          <div className="d-flex-wrap justify-content gap-3 align-item-center">
        <input type="text" ref={con} />
        <input type="text" ref={inp} />

        <button onClick={submithandler}>submit</button>
            
     </div>
        </>
       
    );
}

export default UseRef;
// propsdrriling padna hai isko 
// parent.jsx
// midd.jsx
// Child.jsx