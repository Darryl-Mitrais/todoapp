import React, { Component } from 'react';

class Login extends Component {
    
    constructor (props) {
        super (props)

        this.state = {

        }

        this.login = this.login.bind(this);
    }

    login() {
        this.props.history.push('/tasks');
    }

    render() {
        return (
            <div className="text-center">
                <div className="btn btn-primary" onClick={this.login}> 
                    Login
                </div>
            </div>
        );
    }
}

export default Login;