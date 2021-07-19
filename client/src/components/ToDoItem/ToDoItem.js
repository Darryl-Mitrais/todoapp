import React, { Component } from 'react';

import './ToDoItem.css'
import ToDoDate from './ToDoDate/ToDoDate';
import Card from "../UI/Card/Card";


class ToDoItem extends Component {

    constructor (props) {
        super(props)
        this.state = {
            description: props.description,
            deadline: props.deadline,
            done: props.done
        }
        this.taskIsDone = this.taskIsDone.bind(this);
        this.triggerTickBox = this.triggerTickBox.bind(this);
    }

    taskIsDone() {
        return ( 
            <div>
                <input type="checkbox" 
                    className="todo-item__tickbox"
                    checked={this.state.done}
                    onChange={ this.triggerTickBox }
                />
            </div>
        );
    }

    triggerTickBox () {        
        this.setState ( {
            ...this.state,
            "done": !this.state.done
        });
    }

    render() {
        return (
            <div>
                 <Card className="todo-item">
                    <ToDoDate date={this.state.deadline} />

                    <div className="todo-item__description">
                        <h2>
                            {this.state.description}
                        </h2>
                        <div className="todo-item__doneflag" onClick={ this.triggerTickBox }>
                            {this.taskIsDone()}
                        </div>
                    </div>
                 </Card>
            </div>
        );
    }
}

export default ToDoItem;