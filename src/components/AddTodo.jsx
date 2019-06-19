import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ' ',
      priority: ' '
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitToDo = this.submitToDo.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  submitToDo(event) {
    event.preventDefault();
    this.props.addToDo(this.state.title, this.state.priority);
    this.setState({ title: ' ', priority: ' ' });
  }


  render() {
    return (
  <div>
    
      
        <div className='card'>
          <div className='card-header'>
            Add New Todo
          </div>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label htmlFor='todoInput'>I want to..</label>
                <textarea className='create-todo-text' id='todoInput' name='title' value={ this.state.title } onChange={ this.handleChange }></textarea>
              </div>
              <div className='form-group'>
                <label htmlFor='selectPriority'>How much of a priority is this?</label>
                <select className='create-todo-priority form-control' id='selectPriority' name='priority' value={ this.state.priority } onChange={ this.handleChange }>
                  <option value='1'>High</option>
                  <option value='2'>Medium</option>
                  <option value='3'>Low</option>
                </select>
              </div>
            </form>
          </div>
          <div className='card-footer'>
            <a href='#' className='create-todo btn btn-success btn-block' onClick={ this.submitToDo }>Add</a>
          </div>
        </div>
      
    
  </div>
    );
  }
}

export default AddTodo;
