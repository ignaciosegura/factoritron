import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

import Button from './button.js';

const TeamBoard = inject('GameStore')(observer(class TeamBoard extends Component {
  constructor(props) {
    super(props);
    let team = this.props.team;
    this.teamInfo = this.props.GameStore.teams[team];
  }
  render() {
    return <div className="teamboard">
      <div className="name">{this.teamInfo.name}</div>
      <div className="score">{this.teamInfo.score}</div>
      <div className="buttons">
        <Button sign="+" team={this.props.team} />
        <Button sign="-" team={this.props.team} />
      </div>
    </div>;
  }
}));


export default TeamBoard;
