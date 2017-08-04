import React, {Component} from 'react'

class EditTodoForm extends Component {
  constructor(){
    super()
    this.state = {
      updatedTodoBody: ''
    }
  }
  onInputChange(event){
    this.setState({
      updatedTodoBody: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    console.log('form submit')
    this.props.onUpdateTodo(this.props.todo, this.state.updatedTodoBody)
    this.setState({
      updatedTodoBody: ''
    })
  }
  render(){
    return (
      <div className='editTodoForm'>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            placeholder='Write updated todo here'
            type='text'
            value={this.state.updatedTodoBody}
            onChange={event => this.onInputChange(event)} />
          <button type='submit'>Update Todo</button>
        </form>
      </div>
    )
  }
}

export default EditTodoForm
