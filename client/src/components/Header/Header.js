import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3 ps-3">
                        <div><a href="/" className="navbar-brand">To Do App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;