import React, { Component } from "react";
import { Typography, TextField, Grid } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ClearIcon from "@material-ui/icons/Clear";
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
    var newTask = {
      title: this.state.inputText,
      checked: false,
    };
    todosClone.push(newTask);
    this.setState({
      todos: todosClone,
      inputText: "",
    });
  };

  toggleChecked = (index) => {
    var todosClone = [...this.state.todos];
    todosClone[index].checked = !todosClone[index].checked;
    this.setState({
      todos: todosClone,
      inputText: "",
    });
  };

  clearTask = (index) => {
    var todosClone = [...this.state.todos];
    todosClone.splice(index, 1);
    this.setState({
      todos: todosClone,
      inputText: "",
    });
  };

  render() {
    return (
      <div>
        <Typography variant="h1" color="secondary" id="title">
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
          {this.state.todos.length != 0 ? (
            this.state.todos.map((todo, index) => (
              <div className="task">
                <Grid container id={index}>
                  <Grid item xs={1}>
                    {todo.checked && (
                      <CheckCircleIcon
                        onClick={() => this.toggleChecked(index)}
                      />
                    )}
                    {todo.checked == false && (
                      <RadioButtonUncheckedIcon
                        onClick={() => this.toggleChecked(index)}
                      />
                    )}
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid
                    item
                    xs={8}
                    className={`${todo.checked ? "checked" : ""}`}
                  >
                    <Typography variant="h5" color="text-primary" align="left">
                      {todo.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={1}>
                    <ClearIcon onClick={() => this.clearTask(index)} />
                  </Grid>
                </Grid>
              </div>
            ))
          ) : (
            <Typography variant="h5" color="text-primary" id="catch">
              Your tasks will be shown here.
            </Typography>
          )}
        </div>
      </div>
    );
  }
}

export default ToDoList;
