import React, { Component } from 'react';
import './App.css';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/FlavorForm';
import NameForm from './components/NameForm';
import Reservation from './components/Reservation';

class App extends Component {
  render() {
    return (
      <div className='app'>
          <NameForm />
          <br />
          <EssayForm />
          <br />
          <FlavorForm />
          <br />
          <Reservation />
      </div>
    );
  }
}

export default App;

