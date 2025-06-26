import React,{Component} from "react";
class About extends Component{
    constructor(props){
        super(props)
        this.state={
            a:10,b:10,names:["raj","varun"],
            show:true
        };
    }
//     render(){
//         let {title,bg, cl}=this.props 
//     return (
//         <div style={{padding:"20px", background:bg,color:cl,width:"300px",height: "300px",margin:"30px"}}>
//                     <h4 style={{ background:bg, color:cl, width:"100%",height:"30px",}}></h4>
//     <h3>{title}</h3>
//         </div>
//     ) 
//   }


    

// return(
//     <div>
//     <h4>A: {a}</h4>
//     <button onClick={update}>update</button>
//     {names.map((v,i)=>)
//     }
    
//     </div>
// )


// }

// render(){
//     let {a,b}= this.state //destructing
//     let increment=()=>{
//         this.setState({a:a+1})

//     }
//     let decrement=()=>{
//          if(a!=0){
//         this.setState({a:a-1})
//         }
//     }
render(){
    let {names,show}= this.state //destructing
    // let update=()=>{
    //     this.setState({a:a+10})

    let addname=()=>{
        this.setState({names:[...names,"varun"]})
    }

    
    let showhide=()=>{
        this.setState({show:!show})
    }

return(
    <>
    <button onClick={showhide}>showhide</button>
    <div>
    <h4>A: {a}</h4>
    {/* <h4>B: {b}</h4> */}
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={addname}> addname</button>
    

    </div>

    
    {
        show && <div> 
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
         </div>
    }
   

    {show ?? <div> 
        <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
     </div>
    }
    <h1>no data found </h1>//contional re rendring
    
    </>


    



)
}
}

export default About