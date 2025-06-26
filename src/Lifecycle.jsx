import React,{Component} from "react";
// import React, { Component } from 'react';

export default class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state={count:true,index:0}
    }
    render() {
        let {count,index}=this.state;
        console.log("render")
        return (
            <div>
                <button onClick={()=>{this.setState({index:index+1})}}>index:{index}</button>
                <h2>Lifecycle componenet</h2>
            </div>
        );
    }
    componentDidMount(){
        console.log("did mount")
    }
    shouldComponentUpdate(newprops,newstate){
        console.log("shouldCompomentUpdate");
        if(this.state.index<=10){
            return true
        }
        else{
            return false
        }

    }
    componentDidUpdate(oldprops,oldstate){
        console.log("componentdidupdate");
    }
    componentWillUnmount(){
        console.log("componretWillUnmont");
    }
}

// export default Lifecycle;