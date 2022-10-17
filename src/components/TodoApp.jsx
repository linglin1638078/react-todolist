import React, { useState } from 'react';
import SingleTodo from './SingleTodo';

const List = [
    { id: 1, task: 'Become a SDE', completeStatus: 'active' },
    { id: 2, task: 'Travel around the world', completeStatus: 'active'  },
    { id: 3, task: 'Fly in a hot-air balloon', completeStatus: 'active'  }
]





const TodoApp = () => {
    const [todos, setTodos] = useState(List);
    
    /*const updateTodos = (event) => {
        let updated = [];
        if (event.target.id==='active') {
            updated = todos.filter((todo) => todo.completeStatus==='active')
        }
        else if (event.target.id === 'completed') {
            updated =  todos.filter((todo)=>todo.completeStatus==='completed')
        }
        else {
            updated = todos
        }

        setTodos(updated)
    }*/
    
    
    return (
        <div >
            <h1>My To-Do List</h1>
            {todos.map((todo) => {

            return <SingleTodo todoName={todo.task} completeStatus={todo.completeStatus}/>
            })}
            
        </div>
        
    );
};

export default TodoApp;