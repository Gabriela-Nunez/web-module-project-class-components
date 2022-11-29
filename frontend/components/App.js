import React from 'react'

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


  

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {
            todos.map(todo => {
              return (<li>{todo.name}</li>)
            })
          }
        </ul>
        
        <form>
          <input />
          <button>Add</button>
          <button>Clear Out Completed</button>
        </form>
      </div>
    )
  }
}
