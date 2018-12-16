import { observable } from 'mobx';

class Game {
  teams = observable([]);
  factorTarget = 0;

  addPointToTeam(team) {
    this.teams[team].score++;
  }

  subtractPointToTeam(team) {
    this.teams[team].score = this.positiveOrZero(--this.teams[team].score);
  }

  addTeam(teamName = 'new team') {
    this.teams.push(
      {
        name: teamName,
        score: 0
      }
    )
  }

  changeFactorTarget(number) {
    number = parseInt(number);
    this.factorTarget = this.positiveOrZero(number);
  }

  positiveOrZero(number) {
    return number > 0
      ? number
      : 0;
  }
}

const GameStore = new Game();

export default GameStore;
