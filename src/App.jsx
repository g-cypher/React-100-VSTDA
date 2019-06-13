import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
      ]
    };
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(toDo) {
    const newToDo = {
      toDo
    };
    this.setState({ todos: [...this.state.todos, newToDo] });
  }

  render() {
    return (
      <div className='container'>
        <div className='page-header border-bottom border-light'>
          <h2 className='text-white'>Very Simple Todo App</h2>
          <h6 className='text-white'>Track all of the things</h6>
        </div>
        <br></br>
        <AddTodo addToDo={ this.addToDo } />

      </div>
    );
  }
}

export default App;
