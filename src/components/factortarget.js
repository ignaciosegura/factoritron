import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import GameStore from '../stores/gamestore';

const FactorTarget = inject('GameStore')(observer(class FactorTarget extends Component {
  constructor(props) {
    super(props);

    this.state = { active: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({ active: true });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      GameStore.changeFactorTarget(e.currentTarget.value);
      this.setState({ active: false });
      e.currentTarget.value = '';
    }
  }

  render() {
    let inputState = this.state.active
      ? 'active'
      : 'not-active';

    return <div className="factor-target">
      <div className="number" onClick={this.handleClick}>{this.props.GameStore.factorTarget}</div>
      <input className={inputState} type="text" onKeyPress={this.handleKeyPress} />
    </div >
  }
}));

export default FactorTarget;
