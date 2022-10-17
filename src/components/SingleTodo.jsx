import React, { useState } from 'react';

const SingleTodo = ({ todoName}) => {
    
    const [status, setStatus] = useState(false);

    //change status to true when task is complete
    const crossOut = () => {
        setStatus(!status);
        
    }
    /*const filter = () => { 
        if (status) {
            completeStatus  = 'completed'
        }
        else {
            completeStatus = 'active'
        }
    }*/
    const crossOutStyle = {
        textDecorationLine: 'line-through' 
    }
    
    return (
        <div>
            <input type='checkbox' id='myCheckBox' onClick={crossOut} />
            <spam style={status ? crossOutStyle : null}>{todoName}</spam>
        </div>
    );
};

export default SingleTodo;