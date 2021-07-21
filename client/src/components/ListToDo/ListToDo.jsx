import React, { Component } from "react";
import './ListToDo.css';

import ToDoItem from "../ToDoItem/ToDoItem";
import Card from "../UI/Card/Card";


class ListToDo extends Component {  

    constructor (props) {
        super ( props )

        this.state = {
            todos: [
                {
                    id: '1',
                    description: "Need to do this",
                    deadline: new Date (2021, 7, 20),
                    done: false
                },
                {
                    id: '2',
                    description: "Not so urgent ...",
                    deadline: new Date (2021, 7, 23),
                    done: true
                },
                {
                    id: '3',
                    description: "Minor task",
                    deadline: new Date (2021, 7, 17),
                    done: false
                },
                {
                    id: '4',
                    description: "Report to ...",
                    deadline: new Date (2021, 7, 30),
                    done: false
                }
            ]
        }

        this.addTask = this.addTask.bind(this);
    }

    componentDidMount() {
        
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
                                    key={todo.id}
                                    description={todo.description}
                                    deadline={todo.deadline}
                                    done={todo.done}
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