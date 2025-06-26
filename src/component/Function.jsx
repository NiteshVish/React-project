import React from 'react';
import { useState } from 'react';

let Function = ()=> {
    let [a, setA] = useState(0);
    
    let increment=()=>{
        if(a<100){
        setA(a+1)
        
        }

    }
    let decrement=()=>{
         if(a>0){
        setA(a-1)
         }

            
         
    }


    return (
        <div>
            <p>a:{a}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            
        </div>
    );
}

export default Function;