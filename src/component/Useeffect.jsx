import { useEffect } from "react";
import React from 'react';

function Useeffect() {
    let [count,setCount] = useState(0)
    let [name,setname] = useState(0)
    // Long defination:- Some component need to synochrinize with external systems. For example, you might want to control a
    // non-react component based on the react state ,setup a server connection ,or send an analytical log when a componenet appers 
    // on the screen . Effects let you run some code after renderning so that you can synochrized your component 
    // with  some sysytem outside of react.
    // short defination :- useEffect hook is add some side effect in our component to be performed while update any state 
    // or any props update .
    // syntax of useEffect :- useEffect(callbackfunction, array dependency) 
    useEffect(()=>{console.log("effect")});//it will never return anything
    // everything it will run whenener we update our state or props 
        useEffect(()=>{console.log("effect with empty dependency ")});//it will run only first time when  component render first    useEffect(()=>{console.log("effect")});//it will never return anything
    useEffect(()=>{console.log("effect with array dependency ")});//it will never return anything


    useEffect(
        () => {
            window.addEventListener("resize", () => { console.log("hello world") })
            //cleanup function
            return () => { window.removeEventListener("resize", () => { () => { console.log("hello world") } }) }
        }, [name])
    return (
        <div>
            
        </div>
    );
}

export default Useeffect;