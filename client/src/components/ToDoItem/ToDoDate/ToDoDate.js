import React, { Component } from 'react';
import './ToDoDate.css'

class ToDoDate extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            month: props.date.toLocaleString('en-US', { month: 'long' } ),
            day: props.date.toLocaleString('en-US', { day: '2-digit' } ),
            year: props.date.getFullYear()
        }
    }

    render() {
        return (
            <div className="todo-date">
                <div className="todo-date__month">{this.state.month}</div>
                <div className="todo-date__year">{this.state.year}</div>
                <div className="todo-date__day">{this.state.day}</div>
            </div>
        );
    }
}

export default ToDoDate;