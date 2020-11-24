import React, { Component } from 'react';
import './App.css';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/FlavorForm';
import NameForm from './components/NameForm';

class App extends Component {
  render() {
    return (
      <div className='app'>
          <NameForm />
          <br />
          <EssayForm />
          <br />
          <FlavorForm />
      </div>
    );
  }
}

export default App;

