import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
      {
        this.props.todos.map((todo, idx) => {
          return (<Todo todo={todo} key={idx}/>)
        })
      }
    </ul>
    )
  }
}
