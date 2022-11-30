import React from 'react'
import TodoList from './TodoList';
import Form from './Form';


const todos = [

  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }


addTodo = (e, todo) => {
  e.preventDefault();
  const newTodo = {
    name: todo,
    id: Date.now(),
    completed: false
  }
  this.setState({...this.state, todos: [...this.state.todos, newTodo]});
}

toggleTodo = todoId => {
  console.log(todoId);
  this.setState({...this.state, todos: this.state.todos.map(todo => {
    if(todo.id === todoId) {
      return {...todo, completed: !todo.completed}
    }
    return todo;
  })})
}

handleClear = () => {
  this.setState({...this.state, todos: this.state.todos.filter(todo => {
    return (todo.completed === false);
  })})
}


  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos}/>
        <Form addTodo={this.addTodo} />
        <button onClick={this.handleClear}>Clear Out Completed</button>
      </div>
    )
  }
}
