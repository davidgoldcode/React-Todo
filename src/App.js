import React from 'react';
import ReactDOM from "react-dom";
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoTotal: [], 
    }
  }

  addTask = (itemName) => {
    debugger
    const newItem = {
      name: itemName,
      id: new Date(), 
      completed: false, 
    }

    this.setState({
      toDoTotal: [...this.state.toDoTotal, newItem]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.toDoTotal}/>
      </div>
    );
  }
}

export default App;
