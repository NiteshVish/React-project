import React from 'react';
import Midd from './Midd';

function parent(props) {
    return (
        <>
        <Midd/>
        <div className='bg-info p-5 m-auto w-75 border'>
            <h4> parent component</h4>
            
             
        </div>
        </>
    );
}

export default parent;