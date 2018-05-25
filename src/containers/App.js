import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: "clean room"
        },
        {
          id: 2,
          text: "wash the dishes"
        },
        {
          id: 3,
          text: "feed my cat"
        },
        {
          id: 4,
          text: "clean the window"
        },
        {
          id: 5,
          text: "vacuum the room"
        }
      ],
      value: ""
    };
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(val) {
    const todo = {
      text: this.state.value,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data, value: "" });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title
          title="To Do Application"
          tasks="Number of tasks: "
          tasksNr={this.state.data.length}
        />
        <TodoList list={this.state.data} remove={this.removeTodo.bind(this)} />
        <TodoForm
          value={this.state.value}
          addTodo={this.addTodo.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
