import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ViewToDo extends Component {

  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-header'>
          View To Dos
          </div>
            <ul className='list-group list-group-flush list-unstyled'>
              { this.props.todos.map((todo) => { 
              return <ToDoItem key={ todo.id } oneToDo={ todo } delToDo={ this.props.delToDo } editToDo={ this.props.editToDo } />;
              })}
            </ul>
          </div>
      </div>
    );
  }
}

export default ViewToDo;
