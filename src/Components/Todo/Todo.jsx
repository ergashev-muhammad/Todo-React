import React from "react";


function Todo ({children, todo, handleDelete, handleCheck}) {
    return (
        <li className="todo" style={{textDecoration: todo.isCompleted ? "line-through": "none"}}>

        <input className="todo__check-input" type="checkbox" data-todo-id={todo.id} onClick={handleCheck} defaultChecked={todo.isCompleted}/>
        {children}
        <button className="todo__delete-btn" data-todo-id={todo.id} onClick={handleDelete}>&times;</button>

        </li>
        );
    }
    
    export default Todo;