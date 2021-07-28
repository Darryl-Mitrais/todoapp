import React, { Component } from "react";
import './ListToDo.css';

import ToDoItem from "../ToDoItem/ToDoItem";
import TaskService from "../../services/TaskService";


class ListToDo extends Component {  

    constructor (props) {
        super ( props )

        this.state = {
            todos: []
        }

        this.addTask = this.addTask.bind(this);
    }

    componentDidMount() {
        TaskService.getTasks()
        .then ( (res ) => {
            this.setState ( { todos: res.data });
        });
    }

    addTask() {
        this.props.history.push('/add-task');
    }

    render () {
        return (
            <div>
                <h2 className="text-center todo-list-title">
                    Task List
                </h2>

                <div className="row">
                    <div className="btn btn-primary" onClick={this.addTask}> 
                        Add Task
                    </div>
                </div>

                <div className="row">
                    <div className="todo-list-card">
                        {
                            this.state.todos.map ( todo =>
                                <ToDoItem 
                                    key={todo.uuid}
                                    description={todo.description}
                                    deadline={new Date (todo.created_on.substr(0, 10) )}
                                    done={todo.is_done}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ListToDo;