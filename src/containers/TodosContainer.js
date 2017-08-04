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
  deleteTodo(todo){
    TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter(function(todo){
        return todo._id !== res._id
      })
    this.setState({todos})
    // let newTodos =
    })
  }
  updateTodo(todo, updatedBody){
    TodoModel.update(todo, updatedBody).then((res) => {
      let todos = this.state.todos.map(function(todo){
        if (todo._id !== res._id){
          return todo
        } else {
          return res
        }
      })
    this.setState({todos})
    // let newTodos =
    })
  }
  render() {
    return (
        <div className='todosContainer'>
          <CreateTodosForm
            createTodo={this.createTodo.bind(this)} />
          <TodoList
            todos={this.state.todos}
            onDeleteTodo = {this.deleteTodo.bind(this)}
            onUpdateTodo = {this.updateTodo.bind(this)} />
        </div>
    )
  }
}

export default TodosContainer
