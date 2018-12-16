import React, { Component } from 'react';
import './scss/app.scss';

import ScoreBoard from './components/scoreboard.js';
import FactorTarget from './components/factortarget.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">Factoritrón</div>
        </header>
        <section className="board">
          <FactorTarget />
          <ScoreBoard />
        </section>
      </div>
    );
  }
}

export default App;
