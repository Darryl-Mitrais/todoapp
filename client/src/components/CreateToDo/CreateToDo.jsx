import React, { Component } from 'react';
import TaskService from '../../services/TaskService';

class CreateToDo extends Component {

    constructor ( props ) {
        super ( props )

        this.state = {
            id: this.props.match.params.id,
            description: '',
            deadline: new Date().toISOString().substr(0, 10)
        }

        this.descriptionUpdater = this.descriptionUpdater.bind(this);
        this.deadlineUpdater = this.deadlineUpdater.bind(this);
        this.saveOrUpdateTask = this.saveOrUpdateTask.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    descriptionUpdater = (event) => {
        this.setState ( {
            ...this.state,
            description: event.target.value
        });
    }

    deadlineUpdater = (event) => {
        this.setState ( {
            ...this.state,
            deadline: event.target.value
        });
    }

    saveOrUpdateTask = (e) => {
        e.preventDefault();

        let task = {
            description: this.state.description,
            deadline: this.state.deadline
        }
        
        TaskService.createTask ( task )
        .then ( ( response ) => {
            this.props.history.push('/tasks');
        });
    }

    cancel = (e) => {
        e.preventDefault();
        this.props.history.push('/tasks');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            
                            <h3 className="text-center">
                                Add Task
                            </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Description: </label>
                                        <input type="text"
                                            name="description"
                                            className="form-control"
                                            value={this.state.description} onChange={this.descriptionUpdater} />
                                    </div>

                                    <div className="form-group">
                                        <label>Deadline: </label>
                                        <input type="date" 
                                            name="deadline"
                                            className="form-control"
                                            value={this.state.deadline} onChange={this.deadlineUpdater} />
                                    </div>

                                    <button className="btn btn-success" 
                                        onClick={this.saveOrUpdateTask}>
                                        Save
                                    </button>
                                    <button className="btn btn-danger" 
                                        onClick={this.cancel} 
                                        style={{marginLeft: "10px"}}>
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateToDo;