import React, { Component } from 'react';

function priorityColor(priority) {
    if (priority == 1) {
        return ('success');
    } else if (priority == 2) {
        return 'warning';
    } else if (priority == 3) {
        return 'danger';
    }
}
class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTitle: ' ',
            newPriority: ' ',
            toggleDisplay: false

        };

        this.toggleView = this.toggleView.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveToDo = this.saveToDo.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    toggleView() {
        this.setState({
        toggleDisplay: !this.state.toggleDisplay
    });
    }
    saveToDo() {
        this.props.editToDo(this.state.newTitle, this.state.newPriority, this.props.oneToDo.id);
        this.toggleView();
    }

    render() {
        return (
            <div>
                <li className={`list-group-item-${priorityColor(this.props.oneToDo.priority)} clearfix` }>
                    
                        <input type='checkbox' className='float-left' />
                        { this.props.oneToDo.title }
                        
                        <a className='edit-todo btn float-right text-success' 
                        name='edit-button'
                        href='#'
                        value={ this.state.toggleDisplay }
                        onClick={ () => this.toggleView() }>
                        <i className='fas fa-pen' /></a>
                        
                        <a className='delete-todo btn text-danger float-right'
                        href='#' 
                        onClick={ this.props.delToDo.bind(this, this.props.oneToDo.id) }><i className='fas fa-trash' /></a>
                    
                </li>
                {this.state.toggleDisplay ? (
                    <div className={ `alert-${priorityColor(this.props.oneToDo.priority)} clearfix` }>
                        <div>
                            <label htmlFor='update-todo-text'>Description</label>
                                <textarea className='update-todo-text form-control' name='newTitle' id='exampleFormControlTextarea1'rows='5'value={ this.state.newTitle }onChange={ this.handleChange } />
                        </div>
                        <div>
                            <label htmlFor='newPrioritySelect'> How much of a priority is this?</label>
                                <select name='newPriority'id='newPrioritySelect'className='form-control update-todo-priority'value={ this.state.newPriority }onChange={ this.handleChange }>
                                    <option value='Select'>Select a Priority</option>
                                    <option value='1'>Low</option>
                                    <option value='2'>Medium</option>
                                    <option value='3'>High</option>
                                </select>
                        </div>
                        <div>
                            <button className='update-todo btn btn-success pull-right pull-bottom' name='edit-button' onChange={ this.handleChange } onClick={ () => this.saveToDo() }> Save
                            </button>
                        </div>
                    </div>    
                ) : null}
                    
            </div>
        );
    }

}

export default ToDoItem;
