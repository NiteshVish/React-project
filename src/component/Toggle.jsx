import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props){
    super(props);
this.state={
    a:0,
    names:["raj","varun","naman","uday","vandana"],
    show : true
};
}
render(){
    let {a,names,show}=this.state;//destructring
    let prev=()=>{
        if(a>0){
            this.setState({a:a-1})
        }else{
            this.setState({a:names.length-1})
        }
    }

    let next=()=>{
        if(a<names.length-1){
            this.setState({a:a+1})
        }else{
            this.setState({a:0})
        }

    }
    let showhide = ()=>{
        this.setState({show : !show})
    }
    return (
        <>        <p> {names.join(",")}</p>
        <button onClick={showhide}> show/hide</button>
        {show && <div>
            <h4>names:{names[a]}</h4>
        <button onClick={prev}>prev </button>
        <button onClick={next}>next </button>
        </div>}
        </>


    )
}
}

export default Toggle;