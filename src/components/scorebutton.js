import React, { Component } from 'react';

import GameStore from '../stores/gamestore.js';

class ScoreButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let sign = this.props.sign;

    if (sign === '+') {
      GameStore.addPointToTeam(this.props.team);
    } else {
      GameStore.subtractPointToTeam(this.props.team);
    }

  }

  render() {
    let buttonClass = 'button ';
    buttonClass += this.props.sign === '+'
      ? 'button plus'
      : 'minus';
    return <div className={buttonClass} onClick={this.handleClick}>{this.props.sign}</div>
  }
}

export default ScoreButton;
