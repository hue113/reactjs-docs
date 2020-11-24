import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div className='app'>
            <NumberList numbers={numbers}/>
        </div>
    );
  }
}

export default App;

