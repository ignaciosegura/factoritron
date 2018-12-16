import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

import ScoreButton from './scorebutton.js';

const TeamBoard = inject('GameStore')(observer(class TeamBoard extends Component {
  constructor(props) {
    super(props);
    let team = this.props.team;
    this.teamInfo = this.props.GameStore.teams[team];
  }
  render() {
    return <div className="teamboard scoreboard-box">
      <div className="name">{this.teamInfo.name}</div>
      <div className="score">{this.teamInfo.score}</div>
      <div className="buttons">
        <ScoreButton sign="+" team={this.props.team} />
        <ScoreButton sign="-" team={this.props.team} />
      </div>
    </div>;
  }
}));


export default TeamBoard;
