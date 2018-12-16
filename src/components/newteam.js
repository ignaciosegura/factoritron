import React, { Component } from 'react';

import GameStore from '../stores/gamestore.js';

class NewTeam extends Component {
  constructor(props) {
    super(props);

    this.state = { active: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addTeam = this.addTeam.bind(this);
  }
  handleClick(e) {
    e.preventDefault();

    this.setState({ active: true });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addTeam(e.currentTarget.value.trim());
      this.setState({ active: false });
      e.currentTarget.value = '';
    }
  }

  addTeam(teamName) {
    GameStore.addTeam(teamName);
  }

  render() {
    let inputState = this.state.active
      ? 'active'
      : 'not-active';

    return <div className="new-team scoreboard-box" onClick={this.handleClick}>+
      <input className={inputState} type="text" onKeyPress={this.handleKeyPress} />
    </div>
  }
}

export default NewTeam;
