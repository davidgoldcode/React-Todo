import React from 'react';

class Todo extends React.Component {
    constructor () {
        super();
        this.state = {
            item: '', 
        }
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value,
        })
        console.log(this.state);
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addTask(this.state.item);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                name='item'
                type='text'
                value={this.state.item}
                placeholder='Add to-do items here'
                onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>

        )
    }
}

export default Todo