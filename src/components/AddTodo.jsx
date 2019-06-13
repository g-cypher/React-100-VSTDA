import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDo: ' '
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitToDo = this.submitToDo.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  submitToDo(event) {
    event.preventDefault();
    this.props.addToDo(this.state.toDo);
    this.setState({ toDo: ' ' });
  }


  render() {
    return (
  <div>
    <div className='row'>
      <div className='col-sm-5'>
        <div className='card'>
          <div className='card-header'>
            Add New Todo
          </div>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label htmlFor='todoInput'>I want to..</label>
                <textarea className='form-control' id='todoInput' name='toDo' rows='3' value={ this.state.toDo } onChange={ this.handleChange }></textarea>
              </div>
              <div className='form-group'>
                <label htmlFor='selectPriority'>How much of a priority is this?</label>
                <select className='form-control' id='selectPriority'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </form>
          </div>
          <div className='card-footer'>
            <a href='#' className='btn btn-success btn-block' onClick={ this.submitToDo }>Add</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default AddTodo;
