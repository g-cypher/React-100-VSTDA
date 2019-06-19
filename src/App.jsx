import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import ViewToDo from './components/ViewToDo';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [

      ]
    };
    this.addToDo = this.addToDo.bind(this);
    this.delToDo = this.delToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
  }
//Adding a Todo to
  addToDo(title, priority) {
    const newToDo = {
      title,
      priority,
      id: uuid()
    };
    this.setState({ todos: [...this.state.todos, newToDo] });
  }
//Deleting a Todo
  delToDo(id) {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
//Editing a todo
  editToDo(title, priority, id) {
    let currentTodos = this.state.todos;
    
      for (let i = 0; i < currentTodos.length; i++) {
        
        if ( currentTodos[i].id == id ) {
            currentTodos[i].title == title;
            currentTodos[i].priority == priority;
        }
      }
      this.setState({ todos: currentTodos });
      console.log(currentTodos);
  }
  render() {
    return (
      <div className='container'>
        <div className='page-header border-bottom border-light'>
          <h2 className='text-white'>Very Simple Todo App</h2>
          <h6 className='text-white'>Track all of the things</h6>
        </div>
        <br></br>
        <div className='row'>
          <div className='col-md-4'>
            <AddTodo addToDo={ this.addToDo } />
          </div>
          <div className='col-md-8'>
            <ViewToDo todos={ this.state.todos } delToDo={ this.delToDo } editToDo={ this.editToDo } />
          </div>
        </div>
        

      </div>
    );
  }
}

export default App;
