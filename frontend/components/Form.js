import React from 'react'



export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  submitForm = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todo);
    this.setState({...this.state, todo: ''})
  }
  
  handleChange = e => {
    e.preventDefault();
    this.setState({...this.state, todo: e.target.value})
  }
  
  


  render() {
    return (
      <div>
          <form onSubmit={this.submitForm}>
          <input type='text' name='todo' value={this.state.todo} onChange={this.handleChange}/>
          <button>Add</button>
          
        </form>
      </div>
    )
  }
}
