import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import ScoreBoard from './components/scoreboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">Factoritrón</div>
        </header>
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
