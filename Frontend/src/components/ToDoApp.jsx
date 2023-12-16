import React, { useState } from 'react'

const ToDoApp = () => {

    const [todolist, setTodolist] = useState([]);

    const addTask = (e) => {
        if (e.code == 'Enter') {
            console.log(e.target.value);

            setTodolist([{ text: e.target.value, completed: false }, ...todolist]);
            console.log([{ text: e.target.value, completed: false }, ...todolist]);

            e.target.value = "";
        }
    }

    const completeTask = (index) => {
        console.log(index);
        const temp = todolist;
        temp[index].completed = true;
        setTodolist([...temp]);
        console.log(temp);
    }

    const deleteTask = (index) => {
        const temp = todolist;
        temp.splice(index, 1);
        setTodolist([...temp]);
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
                            todolist.map((task, index) => {
                                return (
                                    <div className='d-flex justify-content-between align-items-center mt-2 fw-medium fs-4'>
                                        <p className={task.completed ? 'text-success task-done' : 'fw-bold'}>
                                            {task.text}
                                            {task.completed ? <span className='badge text-bg-success ms-3'>Completed</span> : ''}
                                        </p>

                                        <div>
                                            <button className='btn btn-primary me-3' onClick={() => { completeTask(index) }} >Complete</button>
                                            <button className='btn text-white' onClick={() => { deleteTask(index) }} style={{ backgroundColor: '#C71837' }}>Delete</button>
                                        </div>
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