import React, { Component } from "react";
import Task from "./Task.jsx";
import CreateTaskInput from "./CreateTaskInput.jsx";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from "./tasksGateway.jsx";
import PropTypes from "prop-types";

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksList) =>
      this.setState({
        tasks: tasksList,
      })
    );
  };

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};
export default TasksList;