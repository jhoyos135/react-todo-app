import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state= {
    todos: [
      {id: 1, content: 'do homework'},
      {id: 2, content: 'travel tomorrow'}
    ]
  }; //data 

  deleteTodo = (id) => {

    const todos = this.state.todos.filter(todo => {

      return todo.id !== id

    });
    this.setState({
      todos: todos
    });

  };
  addTodo = (todo) => {

    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    });

  };

  render() {
    return (
      <div className="todo-app container">

      <h1 className="center blue-text">Todo </h1>
      <Todos deleteTodo= {this.deleteTodo} todos= {this.state.todos} />
      <AddTodo addTodo= {this.addTodo} />

      </div>
    );
  }
}

export default App;
