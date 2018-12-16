import { observable, computed } from 'mobx';

class Game {
  teams = observable([]);

  addPointToTeam(team) {
    this.teams[team].score++;
  }

  subtractPointToTeam(team) {
    this.teams[team].score = this.teams[team].score > 0
      ? this.teams[team].score - 1
      : 0;
  }

  addTeam(teamName = 'new team') {
    this.teams.push(
      {
        name: teamName,
        score: 0
      }
    )
  }
}

const GameStore = new Game();

export default GameStore;
