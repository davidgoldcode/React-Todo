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
      toggleTask: () => {},
    }

    this.setState({
      toDoTotal: [...this.state.toDoTotal, newItem]
    })
  }

  clearFinished = (item) => {
    this.setState({
      toDoTotal: this.state.toDoTotal.filter((item) => {
        return item.completed === false
      })
    })
  }

  toggleTask = (clickedItemID) => {
    debugger
    this.setState({
      toDoTotal: this.state.toDoTotal.map((item) => {
        if (item.id === clickedItemID) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.toDoTotal} toggleTask={this.toggleTask} clearFinished={this.clearFinished}/>
      </div>
    );
  }
}

export default App;
