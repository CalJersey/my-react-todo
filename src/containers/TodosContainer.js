import React, {Component} from 'react'
import TodoModel from '../models/Todos.js'
import CreateTodosForm from '../components/CreateTodosForm.js'
import TodoList from '../components/TodoList'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then( (res) =>{
      this.setState({
        todos: res.todos
      })
    })
  }
  createTodo(newBody){
    let newTodo = {
      body: newBody,
      completed: false
    }
    TodoModel.create(newTodo).then((res) => {
      let todos = this.state.todos
      let newTodos = todos.push(res)
      this.setState({newTodos})
    })
  }
  render() {
    return (
        <div className='todosContainer'>
          <CreateTodosForm
            createTodo={this.createTodo.bind(this)} />
          <TodoList
            todos={this.state.todos} />
        </div>
    )
  }
}

export default TodosContainer
