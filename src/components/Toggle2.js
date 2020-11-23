import React, { Component } from 'react';

class Toggle2 extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }
    /* Another way to write handleClick() */
    // handleClick() {
    //     this.setState( () => ({
    //       isToggleOn: !this.state.isToggleOn
    //     }));
    // }

    render() {
        return (
            <div className="Toggle2">
                <span>Toggle2</span>
                {/* <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button> */}
                <button onClick={ this.handleClick.bind(this) }>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle2;