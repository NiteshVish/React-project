import React from 'react';
import { useContext } from 'react';
import { usersData } from '../Appcontext';
import { middcontext } from './Midd';


function Child(props) {
    let data =useContext(usersData);
    console.log(data)
    let midddata=useContext(middcontext);
    return (
        <div className='bg-info p-5 m-auto w-90 border'>
            <h4> child component</h4>
            <h5> midd component :{midddata}</h5>
            {data.users[0].name}
            <button onClick={()=>{data.setUsers([{name:"rajesh"}])}}>Update </button>
            
        </div>
    );
}

export default Child;