import { Component } from 'react';
import './Card.css';

class Card extends Component {

    constructor (props) {
        super(props)

        this.state = {
            classes: 'card ' + props.className
        }
    }

    render () {
        return (
            <div className={ this.state.classes }>
                { this.props.children }
            </div>
        );
    }
    
}

export default Card;