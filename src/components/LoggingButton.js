import React, { Component } from 'react';

class LoggingButton extends Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} >
                    Click me
                </button>
            </div>
        );
    }
}

export default LoggingButton;