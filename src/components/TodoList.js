// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {

        return (
            <div>
                {props.tasks.map((item) => (
                    <Todo
                    key={item.id}
                    item={item}
                    toggleTask={props.toggleTask}
                    />
                ))}
                <button onClick={props.clearFinished}>
                    Clear Finished Tasks
                </button>
            </div>
        )
}

export default TodoList