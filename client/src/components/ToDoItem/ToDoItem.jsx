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
        this.displayDone = this.displayDone.bind(this);
        this.displayPending = this.displayPending.bind(this);
        this.triggerTickBox = this.triggerTickBox.bind(this);
        this.triggerDelete = this.triggerDelete.bind(this);
    }

    getDoneTickBoxId() {
        return "btn-check-" + this.state.id
    }

    displayDone() {
        return (
            <label className="btn btn-outline-success" 
                for="btn-check"
                onClick={this.triggerTickBox}>Done
            </label>
        );
    }

    displayPending() {
        return (
            <label className="btn btn-outline-success" 
                for="btn-check"
                onClick={this.triggerTickBox}>Pending
            </label>
        );
    }

    triggerTickBox () {        
        this.setState ( {
            ...this.state,
            "done": !this.state.done
        });
    }

    triggerDelete() {

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

                        <input type="checkbox" 
                                className="btn-check"
                                id={this.getDoneTickBoxId}
                                checked={this.state.done}
                                onChange={ this.triggerTickBox }
                            />

                        { this.state.done ?
                            this.displayDone() : this.displayPending() }

                        <div className="btn btn-danger" onClick={ this.triggerDelete }>
                            Delete
                        </div>
                    </div>
                 </Card>
            </div>
        );
    }
}

export default ToDoItem;