import React from 'react';
import Todo from './components/Todo'
import TodoForm from './components/Todo'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo: [], 
    }
  }

  addTask = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date(), 
      completed: false, 
    }

    this.setState({
      toDo: [...this.state.toDo, newItem]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
