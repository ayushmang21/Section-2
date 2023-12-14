import React, { useState } from 'react'

const ToDoApp = () => {

    const [todolist, setTodolist] = useState([]);

    const addTask = (e) => {
        if (e.code == 'Enter') {
            console.log(e.target.value);

            setTodolist([e.target.value, ...todolist]);
            console.log([e.target.value, ...todolist]);

            e.target.value = "";
        }
    }
    return (
        <div style={{ fontFamily: 'Montserrat' }}>
            <div className='container'>
                <h1 className='text-center fw-bold mt-4'>To Do App</h1>

                <hr />

                <div className='card mx-5'>

                    <div className='card-header p-4' style={{ backgroundColor: '#391b7f' }}>
                        <input type="text" onKeyDown={addTask} className='form-control border-0 focus-ring focus-ring-light' style={{ backgroundColor: 'D9C0C1' }} placeholder='Enter Task Here and Press Enter ↵' />
                    </div>
                    
                    <div className='card-body' style={{ backgroundColor: '#D9C0C1' }}>
                        {
                            todolist.map((task) => {
                                return (
                                    <div className='d-flex justify-content-between align-items-center mt-2 fw-medium fs-4'>
                                        <p> {task}  </p>
                                        <button className='btn btn-sm fw-medium text-white' style={{backgroundColor:'#C71837'}}>Delete</button>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoApp;