import { observable, computed } from 'mobx';

class Game {
  teams = observable([{
    score: 42,
    name: 'Valhalla'
  },
  {
    score: 7,
    name: 'Minerva'
  }
  ]
  );

  addPointToTeam(team) {
    this.teams[team].score++;
  }

  subtractPointToTeam(team) {
    this.teams[team].score--;
  }
}

const GameStore = new Game();

export default GameStore;
