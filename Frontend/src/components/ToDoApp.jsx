import React, { useState } from 'react'

const ToDoApp = () => {
    
    const [todolist, setTodolist] = useState([]);

    const addTask =(e) => {
        if(e.code =='Enter'){
            console.log(e.target.value);

            setTodolist( [e.target.value , ...todolist ] );
            console.log( [e.target.value , ...todolist ] );

            e.target.value = "";
        }
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-center fw-bold mt-4'>To Do App</h1>
                <hr />

                <div className='card'>
                    <div className='card-header'>
                        <input type="text" onKeyDown={addTask} className='form-control' placeholder='Enter Task Here and Press Enter ↵'/>
                    </div>
                    <div className='card-body'>
                        { todolist.map( (task) => {return <div className='d-flex justify-content-between align-items-center mt-2 fw-medium fs-4'> <p>{task}</p> 
                        <button className='btn btn-danger'>Delete</button> </div>} ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoApp;