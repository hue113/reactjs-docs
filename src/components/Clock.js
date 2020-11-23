import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log ('did mount');
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    /* We can combine tick() code inside componentDidMount like this: */
    // componentDidMount() {
    //     console.log ('did mount');
    //     this.timerID = setInterval(
    //         () => this.setState ({ date: new Date()})
    //         ,1000
    //     );
    // }
  
    componentWillUnmount() {
        console.log ('will mount');
        clearInterval(this.timerID);
    }

    tick() {
        console.log ('tick setState');
        this.setState({
          date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;