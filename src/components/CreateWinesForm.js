import React, {Component} from 'react'

class CreateWineForm extends Component {
  render(){
    return(
      <div className='createForm wineForm'>
        <h2>Create Wine Here!</h2>
        <form>
          <input
            placeholder='Write a wine here...'
            type='text'
            value='write a new wine' />
          <button type='submit'>Create Wine</button>
        </form>
      </div>
    )
  }
}

export default CreateWineForm
