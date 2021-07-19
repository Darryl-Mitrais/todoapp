import React, { Component } from 'react';

class Login extends Component {
    
    constructor (props) {
        super (props)

        this.state = {

        }


    }

    login() {
        this.props.history.push('/tasks');
    }

    render() {
        return (
            <div>
                <div className="btn btn-primary" onClick={this.addTask}> 
                        Login
                    </div>
            </div>
        );
    }
}

export default Login;