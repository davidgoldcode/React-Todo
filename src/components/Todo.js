import React from 'react';
import './Todo.css';

const Todo = (props) => {

return (
            <div 
            onClick={() => props.toggleTask(props.item.id)}
            className={`item${props.item.completed ? "-finished" : ""}`}
            >
                <p>{props.item.name}</p>
            </div>
        )
}

export default Todo