import React, {Component} from 'react'

class CreateTodoForm extends Component {
  render(){
    return(
      <div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        <form>
          <input
            placeholder='Write a todo here...'
            type='text'
            value='write a new todo' />
          <button type='submit'>Create Todo</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm