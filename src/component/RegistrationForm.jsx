import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";

export default function RegistrationForm() {
  // let [data,setdata]=useState(10)
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [confirmpassword,setconfirmPassword]=useState("");
  let [data,setData]=useState([]);
    let [isupdate,setIsUpdate]=useState(false);
        let [isupdateid,setIsUpdateid]=useState(null);
        let submithandler=(e)=>{
          e.preventDefault();
          if(isupdate&&isupdateid>=0){
            setData(data.map((v,i) =>{
              if(i==id){
                return {...v ,name,email,password,confirmpassword}
              }else{
                return v
              }
            }))
            setIsUpdate(false)
            setIsUpdateid(null)
          }else{
            setData([...data,{name,email,password,confirmpassword}])
          }
          setName("")
          setEmail("")
          setPassword("")
          setconfirmPassword("")
        }
        console.log(data);
        let deletehandeler=(id)=>{
          setData(data.filter((a,i)=>{
            return i!=id
          }))
        }
        let edithandler=(id)=>{
          setName(data[id].name)
          setEmail(data[id].email)
          setPassword(data[id].password)
          setconfirmPassword(data[id].confirmpassword)
        }

 


      

  
  return (
    <>
  <form onSubmit={submithandler}>
    <div className="container">
      <div className="left-section">
        <div className="onimage">
          <h2>Bring Your Music Along</h2>
          <p>try Unlimited</p>
          <h3>$9.99 <span>/ Month</span></h3>
        </div>
      </div>

      <div className="right-section">
        <h2>Registration Form</h2>
        
          <label htmlFor="Inputname">Full Name: </label>
          <input type="name"  name="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="enter your name" />

          <label>Your Email:</label>
          <input type="email" name ="email"value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter your email" />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter your password"/>

          <label>Confirm Password:</label>
          <input type="password" name="confirmpassword" value={confirmpassword} onChange={(e)=>{setconfirmPassword(e.target.value)}}/>

          <div className="checkbox">
            <input type="checkbox" />
            <span>By signing up, you agree to the <a href="#">Play Term of Service</a></span>
          </div>

          <button type="submit">Register</button>
        
       
      </div>
    </div>
  </form>

  <div>
    {data.map((v,i)=>(
      <div>
        <p>name:{v.name}</p>
         <p>email:{v.email}</p>
        <p>password:{v.password}</p>
        <p>confirmpassword:{v.confirmpassword}</p>

      </div>
      
    
    ))}
  </div>
    </>

  );
}
