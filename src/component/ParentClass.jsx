import React, { Component } from 'react';
import Controlled from './Controlled'
import Card from './Card'
import DataCard from './DataCard'

export default class parent extends Component {
    constructor(props){
        super(props)
        this.state={data:[], update: false, updateid: null}
    }
    render() {
        let {data, update, updateid} =this.state;
        let updatedata=(p) =>{
            this.setState({data:[...data,p]})
        }
        let deletehandeler=(id)=>{
            let copy=data;
            copy.splice(id,1);
            this.setState({data:copy})
        }
        let edithandler = (id) => {
            this.setState({ update: true, updateid: id })
        }
        return (
            // <div><Form data={this.state.data} updatedata={updatedata}/>
            // <DataCard data={this.state.data} deletehandeler={deletehandeler}/> </div>

            <div>
                <Controlled data={this.state.data} updatedata={updatedata} update={update} updateid={updateid} />
                <DataCard data={this.state.data} deletehandler={deletehandeler} edithandler={edithandler} />
            </div>
                
        
        );
    }
}

// export default parent;