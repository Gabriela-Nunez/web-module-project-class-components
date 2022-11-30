import React from 'react'

export default class Todo extends React.Component {
  render() {
const handleChange= () => {
  this.props.toggleTodo(this.props.todo.id);
}

    return (
        <li onClick={handleChange}>{this.props.todo.name} 
        { this.props.todo.completed ? <span>✅</span> : <span></span>}</li>
      
    )
  }
}
