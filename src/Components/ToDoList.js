import React, { Component } from "react";
import { Typography, TextField } from "@material-ui/core";
import "./ToDoList.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      todos: [],
    };
  }

  handleTextFieldChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });

    // if (event.key === "Enter") {
    //   console.log(this.state.inputText);

    // }
  };

  onSubmitInputText = () => {
    var todosClone = [...this.state.todos];
    todosClone.push(this.state.inputText);
    this.setState({
      todos: todosClone,
      inputText: "",
    });
  };

  render() {
    return (
      <div>
        <Typography variant="h1" color="secondary">
          todos
        </Typography>
        <TextField
          id="main-input"
          variant="filled"
          size="medium"
          placeholder="What needs to be done?"
          type="text"
          margin="dense"
          value={this.state.inputText}
          onChange={this.handleTextFieldChange}
          onKeyPress={(event) =>
            event.key === "Enter" && this.onSubmitInputText()
          }
        />
        <div>
          {this.state.todos.map((todo) => (
            <Typography variant="h6" color="text-primary">
              {todo}
            </Typography>
          ))}
        </div>
      </div>
    );
  }
}

export default ToDoList;
