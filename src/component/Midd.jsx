
import React, { Component ,createContext} from 'react';
import Child from './Child';
export let middcontext=createContext();



 export default class Midd extends Component {

    render() {
        return (
            <div className='bg-info p-20 m-auto w-75 border'>
                <h4> Midd component</h4>
                <middcontext.Provider value={"hello world "}>
                    <Child/>
                </middcontext.Provider>

                
            </div>
        );
    }
}


