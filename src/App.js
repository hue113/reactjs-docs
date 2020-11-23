import React, { Component } from 'react';
import './App.css';
import LoggingButton from './components/LoggingButton';
import Toggle from './components/Toggle';
import Toggle2 from './components/Toggle2';

class App extends Component {
  render() {
    return (
      <div className='app'>
          <Toggle />
          <Toggle2 />
          <LoggingButton />
      </div>
    );
  }
}

export default App;

