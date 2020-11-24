import React, { Component } from 'react';
import './App.css';
import LoginControl from './components/LoginControl';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <LoginControl />
      </div>
    );
  }
}

export default App;

