import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

import TeamBoard from './teamboard.js';

const ScoreBoard = inject('GameStore')(observer(
  class ScoreBoard extends Component {
    constructor(props) {
      super(props);

      this.teamList = this.props.GameStore.teams;
    }

    render() {
      let ScoreList = this.teamList.map((element, index) => {
        return <TeamBoard team={index} key={index} />
      });

      return <div className="scoreboard">
        {ScoreList}
      </div>
    }
  }
));

export default ScoreBoard;
